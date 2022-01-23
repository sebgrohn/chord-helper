import { Card, Text } from 'grommet';
import FormattedChord from '../../../Components/FormattedChord';
import type { ChordName } from '../../../Theory/chords';

export interface Props {
  chord: ChordName;
}

const ChordBadge = ({ chord }: Props) => (
  <Card background="background-front" width={{ min: '32px' }} pad="xxsmall">
    <Text size="medium" textAlign="center" color="accent-1">
      <FormattedChord chord={chord} />
    </Text>
  </Card>
);

export default ChordBadge;
