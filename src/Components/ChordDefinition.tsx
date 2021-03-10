import { Box, Button, Card, Heading, Text } from 'grommet';
import { Trash } from 'grommet-icons';
import { ChordName, getChordNotes } from '../Theory/chords';
import FormattedChord from './FormattedChord';
import FormattedNote from './FormattedNote';

export interface Props {
  chord?: ChordName;
  onRemoveChord: () => void;
}

const ChordDefinition = ({ chord, onRemoveChord }: Props) => {
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
        pad={{ horizontal: 'medium', vertical: 'small' }}
        direction="row"
        gap="small"
      >
        {chordNotes.map((n) => (
          <Text key={n}>
            <FormattedNote note={n} />
          </Text>
        ))}
      </Box>
      <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
        <Button a11yTitle={`Remove chord ${chord}`} onClick={onRemoveChord}>
          <Box>
            <Trash />
          </Box>
        </Button>
      </Box>
    </>
  );
};

export default ChordDefinition;
