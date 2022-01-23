import { Box, Button, Card, Collapsible, Heading, Text } from 'grommet';
import { Trash } from 'grommet-icons';
import { Fragment } from 'react';
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

  return (
    <>
      <Card
        pad={{ horizontal: 'medium', vertical: 'small' }}
        background="background-front"
        border={{ side: 'right', color: 'background-contrast' }}
      >
        <Heading level={3} size="medium" color="accent-1" margin="none">
          <FormattedChord chord={chord} />
        </Heading>
      </Card>
      <Box
        direction="row"
        pad={{ horizontal: 'small' }}
        gap="small"
        align="center"
      >
        <Box pad={{ top: 'xsmall' }}>
          <Text>
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
            icon={<Trash />}
            a11yTitle={`Remove chord ${chord}`}
            onClick={onRemove}
          />
        </Collapsible>
      </Box>
    </>
  );
};

export default ChordDefinition;
