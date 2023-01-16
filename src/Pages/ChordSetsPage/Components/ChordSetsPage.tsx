import { Box, Button, Text } from 'grommet';
import { Add } from 'grommet-icons';
import PageHeader from '../../../Components/PageHeader';
import PageHeading from '../../../Components/PageHeading';
import type { ChordSet as ChordSetType } from '../../../Store/Types/State';
import ChordSetCardCollection from './ChordSetCardCollection';

export interface Props {
  chordSets: ChordSetType[];
  onAddChordSet: () => void;
  onMoveChordSet: (
    chordSetToMoveIndex: number,
    targetChordSetIndex: number,
  ) => void;
  onRemoveChordSet: (chordSetToRemoveIndex: number) => void;
}

const ChordSetsPage = ({
  chordSets,
  onAddChordSet,
  onMoveChordSet,
  onRemoveChordSet,
}: Props) => (
  <Box gap="medium">
    <PageHeader>
      <Box width="100%">
        <PageHeading>My chord sets</PageHeading>
        <Text>My favourite song compositions.</Text>
      </Box>
      <Button
        icon={<Add />}
        a11yTitle="Add new chord set"
        onClick={onAddChordSet}
      />
    </PageHeader>
    <ChordSetCardCollection
      chordSets={chordSets}
      onAddChordSet={onAddChordSet}
      onMoveChordSet={onMoveChordSet}
      onRemoveChordSet={onRemoveChordSet}
    />
  </Box>
);

export default ChordSetsPage;
