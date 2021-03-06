import { Grid } from 'grommet';
import { ChordName } from '../Theory/chords';
import ChordCard from './ChordCard';

export interface Props {
  chords: ChordName[];
}

const ChordCardCollection = ({ chords }: Props) => (
  <Grid columns="medium" gap="small" justify="center">
    {chords.map((c) => (
      <ChordCard key={c} chord={c} />
    ))}
  </Grid>
);

export default ChordCardCollection;
