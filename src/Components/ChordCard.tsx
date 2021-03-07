import { Card, CardBody, CardHeader } from 'grommet';
import { ChordName } from '../Theory/chords';
import { NoteName } from '../Theory/notes';
import ChordDefinition from './ChordDefinition';
import StringChord from './StringChord';

export interface Props {
  chord: ChordName;
  highlightedNote: NoteName | undefined;
  onHighlightNote: (noteToSelect: NoteName | undefined) => void;
}

const ChordCard = ({ chord, highlightedNote, onHighlightNote }: Props) => (
  <Card background="background-back" width="500px">
    <CardHeader
      background="background-contrast"
      border={{ side: 'bottom', color: 'background-contrast' }}
    >
      <ChordDefinition chord={chord} />
    </CardHeader>
    <CardBody
      pad="small"
      border={{ side: 'top', color: 'background-contrast' }}
    >
      <StringChord
        chord={chord}
        highlightedNote={highlightedNote}
        onHighlightNote={onHighlightNote}
      />
    </CardBody>
  </Card>
);

export default ChordCard;
