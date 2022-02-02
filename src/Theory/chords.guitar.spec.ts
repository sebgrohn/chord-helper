import { getChordNotes } from './chords';
import type { StringId } from './chords.guitar';
import { chords, getStringPositionsParts } from './chords.guitar';
import { getNoteParts, transposeNote } from './notes';
import tunings from './tunings.guitar';

describe('chords.guitar', () => {
  describe.each(chords['guitar'])(
    'chord %p',
    ({ chord, positions, mutedStrings }) => {
      it('should not have positions on muted string', () => {
        const postitionParts = getStringPositionsParts(positions);

        for (const { startStringId, endStringId } of postitionParts) {
          const invalidMutedStrings = mutedStrings.filter(
            (s) => s >= startStringId && s <= endStringId,
          );
          expect(invalidMutedStrings).toHaveLength(0);
        }
      });

      it('should contain correct notes', () => {
        const expectedChordNotes = getChordNotes(chord);
        const chordNotesToVisit = new Set(expectedChordNotes);

        const postitionParts = getStringPositionsParts(positions);

        const strings = tunings['guitar']
          .map((stringNote, stringIndex) => ({
            stringNote,
            stringId: (stringIndex + 1) as StringId,
          }))
          .filter(({ stringId }) => !mutedStrings.includes(stringId));

        for (const { stringNote, stringId } of strings) {
          const fretId = postitionParts
            .filter(
              ({ startStringId, endStringId }) =>
                stringId >= startStringId && stringId <= endStringId,
            )
            .reduce((acc, { fretId }) => Math.max(fretId, acc), 0);

          const [note] = getNoteParts(transposeNote(stringNote, fretId));

          expect(expectedChordNotes).toContain(note);
          chordNotesToVisit.delete(note);
        }

        expect(chordNotesToVisit.size).toBe(0);
      });
    },
  );
});
