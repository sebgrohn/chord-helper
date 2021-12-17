import { Box, Button, Heading, Text } from 'grommet';
import { Add } from 'grommet-icons';
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
    <Box direction="row" align="start" gap="small">
      <Box width="100%">
        <Heading level={2} size="small" margin={{ vertical: 'small' }}>
          My chord sets
        </Heading>
        <Text>My favourite song compositions.</Text>
      </Box>
      <Button
        icon={<Add />}
        a11yTitle="Add new chord set"
        onClick={onAddChordSet}
      />
    </Box>
    <ChordSetCardCollection
      chordSets={chordSets}
      onAddChordSet={onAddChordSet}
      onMoveChordSet={onMoveChordSet}
      onRemoveChordSet={onRemoveChordSet}
    />
  </Box>
);

export default ChordSetsPage;
