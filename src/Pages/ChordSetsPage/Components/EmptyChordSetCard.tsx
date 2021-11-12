import { Box, Stack, Text } from 'grommet';
import { Add } from 'grommet-icons';
import ChordSetCard from './ChordSetCard';

const EmptyChordSetCard = () => (
  <Stack fill interactiveChild="last">
    <ChordSetCard />
    <Box
      fill
      align="center"
      justify="center"
      gap="medium"
      height={{ min: '150px' }}
      background={{ color: 'background', opacity: 'strong' }}
      border={{ color: 'border-brand-semi' }}
    >
      <Add size="large" color="accent-1" />
      <Text size="large" textAlign="center" color="accent-1">
        Add your first chord set
      </Text>
    </Box>
  </Stack>
);

export default EmptyChordSetCard;
