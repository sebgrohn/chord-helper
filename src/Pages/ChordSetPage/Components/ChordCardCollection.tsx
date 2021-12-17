import { Grid } from 'grommet';
import { useState } from 'react';
import { ChordName } from '../../../Theory/chords';
import { NoteName } from '../../../Theory/notes';
import ChordCard from './ChordCard';
import EmptyChordCard from './EmptyChordCard';

export interface Props {
  chords: ChordName[];
  isEditing: boolean;
  onAddChord: () => void;
  onRemoveChord: (chordToRemove: ChordName) => void;
}

const ChordCardCollection = ({
  chords,
  isEditing,
  onAddChord,
  onRemoveChord,
}: Props) => {
  const [highlightedNote, setHighlightedNote] = useState<NoteName>();

  return (
    <Grid columns="medium" gap="small" justify="center">
      {chords.length !== 0 ? (
        chords.map((c) => (
          <ChordCard
            key={c}
            chord={c}
            isEditing={isEditing}
            highlightedNote={highlightedNote}
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
