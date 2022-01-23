import { Box, Stack } from 'grommet';
import ChordBadge from './ChordBadge';

const EmptyChordBadge = () => (
  <Stack interactiveChild="last">
    <ChordBadge chord="C" />
    <Box
      fill
      background={{ color: 'background', opacity: 'strong' }}
      border={{ color: 'border-semi' }}
    />
  </Stack>
);

export default EmptyChordBadge;
