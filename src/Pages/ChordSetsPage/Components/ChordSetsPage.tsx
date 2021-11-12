import { Box, Heading, Text } from 'grommet';
import type { ChordSet as ChordSetType } from '../../../Store/Types/State';
import ChordSetCardCollection from './ChordSetCardCollection';

export interface Props {
  chordSets: ChordSetType[];
}

const ChordSetsPage = ({ chordSets }: Props) => (
  <Box gap="medium">
    <Box>
      <Heading level={2} size="small" margin={{ vertical: 'small' }}>
        My chord sets
      </Heading>
      <Text>My favourite song compositions.</Text>
    </Box>
    <ChordSetCardCollection chordSets={chordSets} />
  </Box>
);

export default ChordSetsPage;
