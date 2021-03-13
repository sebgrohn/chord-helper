import { Box, Button, Card, Collapsible, Heading, Text } from 'grommet';
import { Trash } from 'grommet-icons';
import { ChordName, getChordNotes } from '../Theory/chords';
import FormattedChord from './FormattedChord';
import FormattedNotes from './FormattedNotes';

export interface Props {
  chord: ChordName | undefined;
  isEditing: boolean;
  onRemoveChord: (() => void) | undefined;
}

const ChordDefinition = ({ chord, isEditing, onRemoveChord }: Props) => {
  const chordNotes = chord ? getChordNotes(chord) : [];

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
            <FormattedNotes notes={chordNotes} />
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
