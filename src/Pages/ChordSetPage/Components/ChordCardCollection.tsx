import { Grid } from 'grommet';
import { useState } from 'react';
import type { ChordName } from '../../../Theory/chords';
import type { NoteName } from '../../../Theory/notes';
import ChordCard from './ChordCard';
import EmptyChordCard from './EmptyChordCard';

export interface Props {
  chords: ChordName[];
  isEditing: boolean;
  onAddChord: () => void;
  onMoveChord: (chordToMoveIndex: number, targetChordIndex: number) => void;
  onRemoveChord: (chordToRemove: ChordName) => void;
}

const ChordCardCollection = ({
  chords,
  isEditing,
  onAddChord,
  onMoveChord,
  onRemoveChord,
}: Props) => {
  const [highlightedNote, setHighlightedNote] = useState<NoteName>();

  return (
    <Grid columns="medium" gap="small" justify="center">
      {chords.length !== 0 ? (
        chords.map((c, i) => (
          <ChordCard
            key={c}
            chord={c}
            index={i}
            isEditing={isEditing}
            highlightedNote={highlightedNote}
            onMove={(chordToMoveHereIndex) =>
              onMoveChord(chordToMoveHereIndex, i)
            }
            onRemove={() => onRemoveChord(c)}
            onHighlightNote={setHighlightedNote}
          />
        ))
      ) : (
        <EmptyChordCard onAdd={onAddChord} />
      )}
    </Grid>
  );
};

export default ChordCardCollection;
