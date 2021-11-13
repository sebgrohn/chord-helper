import { Box, Heading, Keyboard, Text, TextInput } from 'grommet';
import { useState } from 'react';
import { ChordName } from '../../../Theory/chords';
import ChordCardCollection from './ChordCardCollection';
import ChordSelector from './ChordSelector';

export interface Props {
  name: string;
  description: string;
  selectedChords: ChordName[];
  availableChords: ChordName[];
  onSetName: (newName: string) => void;
  onSetDescription: (newDescription: string) => void;
  onAddChord: (chordToAdd: ChordName) => void;
  onRemoveChord: (chordToRemove: ChordName) => void;
}

const ChordSetPage = ({
  name,
  description,
  selectedChords,
  availableChords,
  onSetName,
  onSetDescription,
  onAddChord,
  onRemoveChord,
}: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  const filteredChords = availableChords.filter(
    (c) => selectedChords.indexOf(c) < 0,
  );

  return (
    <Keyboard onEsc={() => setIsEditing(false)}>
      <Box gap="medium">
        <Box direction="row" align="start" gap="small">
          <Keyboard onEnter={() => setIsEditing(false)}>
            <Box width="100%">
              <Heading level={2} size="small" margin={{ vertical: 'small' }}>
                {isEditing ? (
                  <TextInput
                    plain="full"
                    value={name}
                    placeholder="Enter name"
                    onChange={(event) => onSetName(event.target.value)}
                  />
                ) : (
                  name || <em>Unnamed chord set</em>
                )}
              </Heading>
              <Text>
                {isEditing ? (
                  <TextInput
                    plain="full"
                    value={description}
                    placeholder="Enter description"
                    onChange={(event) => onSetDescription(event.target.value)}
                  />
                ) : (
                  description || <em>No description</em>
                )}
              </Text>
            </Box>
          </Keyboard>
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
    </Keyboard>
  );
};

export default ChordSetPage;
