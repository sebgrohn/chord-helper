import { Box, Stack, Text } from 'grommet';
import { Add } from 'grommet-icons';
import ChordCard from './ChordCard';

const EmptyChordCard = () => (
  <Stack fill interactiveChild="last">
    <ChordCard />
    <Box
      fill
      align="center"
      justify="center"
      gap="large"
      background={{ color: 'background', opacity: 'strong' }}
      border={{ color: 'border-semi' }}
    >
      <Add size="large" color="accent-1" />
      <Text size="large" textAlign="center" color="accent-1">
        Add a chord to start
      </Text>
    </Box>
  </Stack>
);

export default EmptyChordCard;
