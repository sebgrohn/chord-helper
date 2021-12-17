import { Grid } from 'grommet';
import type { ChordSet as ChordSetType } from '../../../Store/Types/State';
import ChordSetCard from './ChordSetCard';
import EmptyChordSetCard from './EmptyChordSetCard';

export interface Props {
  chordSets: ChordSetType[];
  onAddChordSet: () => void;
  onRemoveChordSet: (chordSetToRemoveIndex: number) => void;
}

const ChordSetCardCollection = ({
  chordSets,
  onAddChordSet,
  onRemoveChordSet,
}: Props) => (
  <Grid columns="medium" gap="small" justify="center">
    {chordSets.length !== 0 ? (
      chordSets.map(({ name, description, selectedChords }, i) => (
        <ChordSetCard
          key={i}
          chordSetIndex={i}
          name={name}
          description={description}
          selectedChords={selectedChords}
          onRemove={() => onRemoveChordSet(i)}
        />
      ))
    ) : (
      <EmptyChordSetCard onAdd={onAddChordSet} />
    )}
  </Grid>
);

export default ChordSetCardCollection;
