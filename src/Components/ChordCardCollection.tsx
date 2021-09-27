import { Grid } from 'grommet';
import { useState } from 'react';
import { ChordName } from '../Theory/chords';
import { NoteName } from '../Theory/notes';
import ChordCard from './ChordCard';
import EmptyChordCard from './EmptyChordCard';

export interface Props {
  chords: ChordName[];
  isEditing: boolean;
  onRemoveChord: (chordToRemove: ChordName) => void;
}

const ChordCardCollection = ({ chords, isEditing, onRemoveChord }: Props) => {
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
        <EmptyChordCard />
      )}
    </Grid>
  );
};

export default ChordCardCollection;
