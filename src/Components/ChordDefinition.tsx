import { Box, Button, Card, Collapsible, Heading, Text } from 'grommet';
import { Trash } from 'grommet-icons';
import { Fragment } from 'react';
import { ChordName, getChordNotes } from '../Theory/chords';
import FormattedChord from './FormattedChord';
import FormattedNote from './FormattedNote';

export interface Props {
  chord?: ChordName;
  isEditing: boolean;
  onRemoveChord: () => void;
}

const ChordDefinition = ({ chord, isEditing, onRemoveChord }: Props) => {
  if (!chord) {
    return null;
  }

  const chordNotes = getChordNotes(chord);
  return (
    <>
      <Card
        pad={{ horizontal: 'medium', vertical: 'small' }}
        background="background-front"
        border={{ side: 'right', color: 'background-contrast' }}
      >
        <Heading level={2} size="small" color="accent-1" margin="none">
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
                <FormattedNote note={n} />
              </Fragment>
            ))}
          </Text>
        </Box>
        <Collapsible open={isEditing} direction="horizontal">
          <Button
            icon={<Trash />}
            a11yTitle={`Remove chord ${chord}`}
            onClick={onRemoveChord}
          />
        </Collapsible>
      </Box>
    </>
  );
};

export default ChordDefinition;
