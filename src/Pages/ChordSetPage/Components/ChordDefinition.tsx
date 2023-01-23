import {
  Box,
  Button,
  Card,
  Collapsible,
  Heading,
  ResponsiveContext,
  Text,
} from 'grommet';
import { Trash } from 'grommet-icons';
import { Fragment, useContext } from 'react';
import FormattedChord from '../../../Components/FormattedChord';
import FormattedNoteName from '../../../Components/FormattedNoteName';
import type { ChordName } from '../../../Theory/chords';
import { getChordNotes } from '../../../Theory/chords';

export interface Props {
  chord: ChordName | undefined;
  isEditing: boolean;
  onRemove?: () => void;
}

const ChordDefinition = ({ chord, isEditing, onRemove }: Props) => {
  const chordNotes = chord ? getChordNotes(chord) : [];

  const isSmallSize = useContext(ResponsiveContext) === 'small';

  return (
    <>
      <Card
        pad={{ horizontal: 'medium', vertical: 'small' }}
        background="background-front"
        border={{ side: 'right', color: 'background-contrast' }}
      >
        <Heading
          level={3}
          color="accent-1"
          margin="none"
          style={{ whiteSpace: 'nowrap' }}
        >
          <FormattedChord chord={chord} />
        </Heading>
      </Card>
      <Box
        direction="row"
        pad={{ left: 'small', right: 'xsmall' }}
        gap="small"
        align="center"
        flex="shrink"
      >
        <Box pad={{ top: 'xsmall' }}>
          <Text
            size={isSmallSize ? 'small' : 'medium'}
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {chordNotes.map((n, i) => (
              <Fragment key={n}>
                {i !== 0 && ' '}
                <FormattedNoteName note={n} />
              </Fragment>
            ))}
          </Text>
        </Box>
        <Collapsible open={isEditing} direction="horizontal">
          <Button
            icon={<Trash size={isSmallSize ? 'small' : 'medium'} />}
            a11yTitle={`Remove chord ${chord}`}
            onClick={onRemove}
          />
        </Collapsible>
      </Box>
    </>
  );
};

export default ChordDefinition;
