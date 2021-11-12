import { Box, Card, CardBody, CardHeader, Heading } from 'grommet';
import Link from '../../../Components/Link';
import type { ChordName } from '../../../Theory/chords';
import ChordBadge from './ChordBadge';

export interface Props {
  chordSetIndex?: number;
  name?: string;
  description?: string;
  selectedChords?: ChordName[];
}

const ChordSetCard = ({
  chordSetIndex = -1,
  name = '',
  description = '',
  selectedChords = [],
}: Props) => (
  <Card background="background-back" fill border={{ color: 'border-brand' }}>
    <Link to={`/chord-sets/${chordSetIndex}`}>
      <CardHeader
        pad="small"
        background="background-contrast"
        border={{ side: 'bottom', color: 'background-contrast' }}
      >
        <Heading level={3} size="small" margin="none" color="brand">
          {name}
        </Heading>
      </CardHeader>
    </Link>
    <CardBody
      pad="small"
      gap="small"
      border={{ side: 'top', color: 'background-contrast' }}
    >
      {description}
      <Box direction="row" align="start" wrap gap="xsmall">
        {selectedChords.map((c) => (
          <ChordBadge key={c} chord={c} />
        ))}
      </Box>
    </CardBody>
  </Card>
);

export default ChordSetCard;
