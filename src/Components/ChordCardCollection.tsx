import { Grid } from 'grommet';
import { useState } from 'react';
import { ChordName } from '../Theory/chords';
import { NoteName } from '../Theory/notes';
import ChordCard from './ChordCard';

export interface Props {
  chords: ChordName[];
}

const ChordCardCollection = ({ chords }: Props) => {
  const [highlightedNote, setHighlightedNote] = useState<NoteName>();

  return (
    <Grid columns="medium" gap="small" justify="center">
      {chords.map((c) => (
        <ChordCard
          key={c}
          chord={c}
          highlightedNote={highlightedNote}
          onHighlightNote={setHighlightedNote}
        />
      ))}
    </Grid>
  );
};

export default ChordCardCollection;
