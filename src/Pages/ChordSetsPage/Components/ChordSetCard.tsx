import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Collapsible,
  Heading,
  Keyboard,
  Text,
} from 'grommet';
import { Checkmark, Close, Trash } from 'grommet-icons';
import { useCallback, useRef, useState } from 'react';
import FormattedKey from '../../../Components/FormattedKey';
import Link from '../../../Components/Link';
import useSortable from '../../../Hooks/useSortable';
import type { ChordName } from '../../../Theory/chords';
import type { KeyName } from '../../../Theory/keys';
import ChordBadge from './ChordBadge';

export interface Props {
  chordSetIndex?: number;
  name?: string;
  description?: string;
  selectedKey?: KeyName;
  selectedChords?: ChordName[];
  onMove?: (setToMoveHereIndex: number) => void;
  onRemove?: () => void;
}

const ChordSetCard = ({
  chordSetIndex = -1,
  name = '',
  description = '',
  selectedKey,
  selectedChords = [],
  onMove,
  onRemove,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isRemoving, setIsRemoving] = useState(false);

  const handleMove = useCallback(
    (setToMoveHereIndex: number) => {
      setIsRemoving(false);
      onMove?.(setToMoveHereIndex);
    },
    [onMove],
  );

  const isDragging = useSortable(chordSetIndex, !isRemoving, ref, handleMove);

  return (
    <Keyboard onEsc={() => setIsRemoving(false)}>
      <Card
        ref={ref}
        background="background-back"
        fill
        border={{ color: 'border-brand' }}
        style={{
          cursor: !isRemoving ? 'grab' : 'default',
          opacity: isDragging ? 0.3 : 1,
        }}
      >
        <CardHeader
          pad="small"
          background="background-contrast"
          border={{ side: 'bottom', color: 'background-contrast' }}
        >
          <Link to={`/chord-sets/${chordSetIndex}`}>
            <Heading level={3} size="small" margin="none" color="brand">
              {name || <em>Unnamed chord set</em>}
            </Heading>
            {selectedKey && (
              <Text size="large">
                in <FormattedKey keyName={selectedKey} />
              </Text>
            )}
          </Link>
          <Box direction="row" gap="small" justify="end" align="center">
            <Collapsible open={isRemoving} direction="horizontal">
              <Button
                icon={<Close />}
                a11yTitle={`Cancel removing chord set ${name}`}
                onClick={() => setIsRemoving(false)}
              />
            </Collapsible>
            <Button
              icon={
                <Box direction="row">
                  <Collapsible open={isRemoving} direction="horizontal">
                    <Checkmark />
                  </Collapsible>
                  <Collapsible open={!isRemoving} direction="horizontal">
                    <Trash />
                  </Collapsible>
                </Box>
              }
              a11yTitle={
                isRemoving
                  ? `Confirm removing chord set ${name}`
                  : `Remove chord set ${name}`
              }
              primary={isRemoving}
              onClick={() => {
                if (isRemoving && onRemove) {
                  onRemove();
                }

                setIsRemoving(!isRemoving);
              }}
            />
          </Box>
        </CardHeader>
        <CardBody
          pad="small"
          gap="small"
          border={{ side: 'top', color: 'background-contrast' }}
        >
          <Text>{description || <em>No description</em>}</Text>
          <Box direction="row" align="start" wrap gap="xsmall">
            {selectedChords.map((c) => (
              <ChordBadge key={c} chord={c} />
            ))}
          </Box>
        </CardBody>
      </Card>
    </Keyboard>
  );
};

export default ChordSetCard;
