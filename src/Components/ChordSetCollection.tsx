import { Box } from 'grommet';
import type { ChordSet as ChordSetType } from '../Store/Types/State';
import { ChordName } from '../Theory/chords';
import ChordSet from './ChordSet';

export interface Props {
  chordSets: ChordSetType[];
  availableChords: ChordName[];
  onSetName: (chordSetIndex: number, newName: string) => void;
  onSetDescription: (chordSetIndex: number, newDescription: string) => void;
  onAddChord: (chordSetIndex: number, chordToAdd: ChordName) => void;
  onRemoveChord: (chordSetIndex: number, chordToRemove: ChordName) => void;
}

const ChordSetCollection = ({
  chordSets,
  availableChords,
  onSetName,
  onSetDescription,
  onAddChord,
  onRemoveChord,
}: Props) => (
  <Box gap="large" border={{ side: 'between', color: 'border-semi' }}>
    {chordSets.map(({ name, description, selectedChords }, i) => (
      <ChordSet
        key={i}
        name={name}
        description={description}
        selectedChords={selectedChords}
        availableChords={availableChords}
        onSetName={(newName) => onSetName(i, newName)}
        onSetDescription={(newDescription) =>
          onSetDescription(i, newDescription)
        }
        onAddChord={(chordToAdd) => onAddChord(i, chordToAdd)}
        onRemoveChord={(chordToRemove) => onRemoveChord(i, chordToRemove)}
      />
    ))}
  </Box>
);

export default ChordSetCollection;
