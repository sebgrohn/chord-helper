import { Grid } from 'grommet';
import type { ChordSet as ChordSetType } from '../../../Store/Types/State';
import ChordSetCard from './ChordSetCard';
import EmptyChordSetCard from './EmptyChordSetCard';

export interface Props {
  chordSets: ChordSetType[];
}

const ChordSetCardCollection = ({ chordSets }: Props) => (
  <Grid columns="medium" gap="small" justify="center">
    {chordSets.length !== 0 ? (
      chordSets.map(({ name, description, selectedChords }, i) => (
        <ChordSetCard
          key={i}
          chordSetIndex={i}
          name={name}
          description={description}
          selectedChords={selectedChords}
        />
      ))
    ) : (
      <EmptyChordSetCard />
    )}
  </Grid>
);

export default ChordSetCardCollection;
