import { KeyboardEvent, useCallback, useState } from 'react';
import { ChordName, isValidChordName } from '../Theory/chords';

export interface Props {
  chords: ChordName[];
  onChordSelected: (newSelectedChord: ChordName) => void;
}

const ChordSelector = ({ chords, onChordSelected }: Props) => {
  const [selectedChord, setSelectedChord] = useState();

  return (
    <div>
      Add chord:{' '}
      <select
        value={selectedChord}
        onChange={(e) => {
          setSelectedChord(undefined);
          onChordSelected(e.target.value as ChordName);
        }}
      >
        <option value={undefined}>Add chord...</option>
        {chords.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChordSelector;
