import { Box, Button, ResponsiveContext, Stack, Text } from 'grommet';
import { Add } from 'grommet-icons';
import { useContext } from 'react';
import ChordCard from './ChordCard';

export interface Props {
  onAdd: () => void;
}

const EmptyChordCard = ({ onAdd }: Props) => {
  const isSmallSize = useContext(ResponsiveContext) === 'small';

  return (
    <Stack fill interactiveChild="last">
      <ChordCard />
      <Button fill onClick={onAdd}>
        <Box
          fill
          align="center"
          justify="center"
          gap="large"
          background={{ color: 'background', opacity: 'strong' }}
          border={{ color: 'border-semi' }}
        >
          <Add size={isSmallSize ? 'medium' : 'large'} color="accent-1" />
          <Text
            size={isSmallSize ? 'medium' : 'large'}
            textAlign="center"
            color="accent-1"
          >
            Add a chord to start
          </Text>
        </Box>
      </Button>
    </Stack>
  );
};

export default EmptyChordCard;
