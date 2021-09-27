import { Box, Heading, Text } from 'grommet';
import { useState } from 'react';
import { ChordName } from '../Theory/chords';
import ChordCardCollection from './ChordCardCollection';
import ChordSelector from './ChordSelector';

export interface Props {
  name: string;
  description: string;
  selectedChords: ChordName[];
  availableChords: ChordName[];
  onAddChord: (chordToAdd: ChordName) => void;
  onRemoveChord: (chordToRemove: ChordName) => void;
}

const ChordSet = ({
  name,
  description,
  selectedChords,
  availableChords,
  onAddChord,
  onRemoveChord,
}: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  const filteredChords = availableChords.filter(
    (c) => selectedChords.indexOf(c) < 0,
  );

  return (
    <Box gap="medium">
      <Box direction="row" align="start" gap="small">
        <Box width="100%">
          <Heading level={2} size="small" margin={{ vertical: 'small' }}>
            {name}
          </Heading>
          <Text>{description}</Text>
        </Box>
        <ChordSelector
          chords={filteredChords}
          isEditing={isEditing}
          onAdd={onAddChord}
          onIsEditingChange={setIsEditing}
        />
      </Box>
      <ChordCardCollection
        chords={selectedChords}
        isEditing={isEditing}
        onRemoveChord={onRemoveChord}
      />
    </Box>
  );
};

export default ChordSet;
