import { useCallback, useEffect, useState } from 'react';
import { ChordName, isValidChordName } from '../Theory/chords';
import chords from '../Theory/chords.guitar';

export interface Props {
  selectedChord?: ChordName;
  onSelectedChordChange: (newSelectedChord: ChordName) => void;
}

const ChordSelector = ({ selectedChord, onSelectedChordChange }: Props) => {
  const [chordString, setChordString] = useState(selectedChord ?? '');

  useEffect(() => selectedChord && setChordString(selectedChord), [
    selectedChord,
  ]);

  const handleChordStringChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newChordString = e.target.value;
      setChordString(newChordString);

      if (isValidChordName(newChordString)) {
        onSelectedChordChange(newChordString);
      }
    },
    [onSelectedChordChange],
  );

  const chordsForInstrument = chords['guitar'];

  return (
    <div>
      Chord:{' '}
      <select
        value={selectedChord}
        onChange={(e) => onSelectedChordChange(e.target.value as ChordName)}
      >
        {Object.keys(chordsForInstrument).map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <input value={chordString} onChange={handleChordStringChange} />{' '}
      {chordString === selectedChord ? '✔️' : '❌'}
    </div>
  );
};

export default ChordSelector;
