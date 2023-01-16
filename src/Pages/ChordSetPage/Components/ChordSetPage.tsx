import { Box, Keyboard } from 'grommet';
import { useRef, useState } from 'react';
import PageHeader from '../../../Components/PageHeader';
import type { ChordName } from '../../../Theory/chords';
import type { KeyName } from '../../../Theory/keys';
import ChordCardCollection from './ChordCardCollection';
import ChordSelector from './ChordSelector';
import DetailsBox from './DetailsBox';
import EditButton from './EditButton';
import KeySelector from './KeySelector';

export interface Props {
  name: string;
  description: string;
  selectedKey?: KeyName;
  selectedChords: ChordName[];
  availableKeys: KeyName[];
  filteredChords: ChordName[];
  suggestedKeys: KeyName[];
  onSetName: (newName: string) => void;
  onSetDescription: (newDescription: string) => void;
  onSetKey: (newKey?: KeyName) => void;
  onAddChord: (chordToAdd: ChordName) => void;
  onMoveChord: (chordToMoveIndex: number, targetChordIndex: number) => void;
  onRemoveChord: (chordToRemove: ChordName) => void;
}

const ChordSetPage = ({
  name,
  description,
  selectedKey,
  selectedChords,
  availableKeys,
  filteredChords,
  suggestedKeys,
  onSetName,
  onSetDescription,
  onSetKey,
  onAddChord,
  onMoveChord,
  onRemoveChord,
}: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  const chordSelectorFocusRef = useRef<(options?: FocusOptions) => void>();

  return (
    <Keyboard onEsc={() => setIsEditing(false)}>
      <Box gap="medium">
        <PageHeader>
          <DetailsBox
            name={name}
            description={description}
            selectedKey={selectedKey}
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
            <KeySelector
              selectedKey={selectedKey}
              keys={availableKeys}
              suggestedKeys={suggestedKeys}
              isEditing={isEditing}
              onChange={onSetKey}
            />
            <ChordSelector
              chords={filteredChords}
              isEditing={isEditing}
              onAdd={onAddChord}
              focusRef={chordSelectorFocusRef}
            />
            <EditButton
              isEditing={isEditing}
              onIsEditingChange={setIsEditing}
            />
          </Box>
        </PageHeader>
        <ChordCardCollection
          chords={selectedChords}
          isEditing={isEditing}
          onAddChord={() => {
            setIsEditing(true);
            chordSelectorFocusRef.current?.();
          }}
          onMoveChord={onMoveChord}
          onRemoveChord={onRemoveChord}
        />
      </Box>
    </Keyboard>
  );
};

export default ChordSetPage;
