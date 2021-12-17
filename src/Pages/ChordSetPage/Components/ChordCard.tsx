import { Card, CardBody, CardHeader } from 'grommet';
import { useRef } from 'react';
import useSortable from '../../../Hooks/useSortable';
import type { ChordName } from '../../../Theory/chords';
import type { NoteName } from '../../../Theory/notes';
import ChordDefinition from './ChordDefinition';
import StringChord from './StringChord';

export interface Props {
  chord?: ChordName;
  index?: number;
  isEditing?: boolean;
  highlightedNote?: NoteName;
  onMove?: (chordToMoveHereIndex: number) => void;
  onRemove?: () => void;
  onHighlightNote?: (noteToSelect: NoteName | undefined) => void;
}

const ChordCard = ({
  chord,
  index = -1,
  isEditing = false,
  highlightedNote,
  onMove,
  onRemove,
  onHighlightNote,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const isDragging = useSortable(index, isEditing, ref, onMove);

  return (
    <Card
      ref={ref}
      background="background-back"
      width="500px"
      style={{
        cursor: isEditing ? 'grab' : 'default',
        opacity: isDragging ? 0.3 : 1,
      }}
    >
      <CardHeader
        background="background-contrast"
        border={{ side: 'bottom', color: 'background-contrast' }}
        justify="between"
      >
        <ChordDefinition
          chord={chord}
          isEditing={isEditing || false}
          onRemove={onRemove}
        />
      </CardHeader>
      <CardBody
        pad="small"
        border={{ side: 'top', color: 'background-contrast' }}
      >
        <StringChord
          chord={chord}
          disabled={isEditing || false}
          highlightedNote={highlightedNote}
          onHighlightNote={onHighlightNote}
        />
      </CardBody>
    </Card>
  );
};

export default ChordCard;
