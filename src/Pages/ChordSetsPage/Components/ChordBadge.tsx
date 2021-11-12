import { Card, Text } from 'grommet';
import FormattedChord from '../../../Components/FormattedChord';
import { ChordName } from '../../../Theory/chords';

export interface Props {
  chord?: ChordName;
}

const ChordBadge = ({ chord }: Props) => (
  <Card
    background="background-front"
    pad={{ horizontal: 'xsmall', vertical: 'xxsmall' }}
  >
    <Text size="medium" color="accent-1">
      <FormattedChord chord={chord} />
    </Text>
  </Card>
);

export default ChordBadge;
