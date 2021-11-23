import { Box, Keyboard } from 'grommet';
import { useState } from 'react';
import type { ChordName } from '../../../Theory/chords';
import ChordCardCollection from './ChordCardCollection';
import ChordSelector from './ChordSelector';
import DetailsBox from './DetailsBox';
import EditButton from './EditButton';

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
          <DetailsBox
            name={name}
            description={description}
            isEditing={isEditing}
            onSetName={onSetName}
            onSetDescription={onSetDescription}
            onIsEditingChange={setIsEditing}
          />
          <Box
            direction="row"
            justify="end"
            align="center"
            gap="small"
            width="100%"
          >
            <ChordSelector
              chords={filteredChords}
              isEditing={isEditing}
              onAdd={onAddChord}
            />
            <EditButton
              isEditing={isEditing}
              onIsEditingChange={setIsEditing}
            />
          </Box>
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
