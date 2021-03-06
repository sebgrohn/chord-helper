import { Select } from 'grommet';
import { useCallback, useMemo, useState } from 'react';
import { ChordName } from '../Theory/chords';

export interface Props {
  chords: ChordName[];
  onChordSelected: (newSelectedChord: ChordName) => void;
}

const ChordSelector = ({ chords, onChordSelected }: Props) => {
  const [selectedChord, setSelectedChord] = useState();
  const [searchString, setSearchString] = useState('');

  const matchingChords = useMemo(
    () =>
      chords
        .map((c) => ({ label: c, value: c }))
        .filter((x) =>
          x.label.toLowerCase().includes(searchString.toLowerCase()),
        ),
    [chords, searchString],
  );

  const handleChange = useCallback(
    ({ value }) => {
      setSelectedChord(undefined);
      setSearchString('');
      onChordSelected(value as ChordName);
    },
    [onChordSelected],
  );

  return (
    <Select
      value={selectedChord}
      options={matchingChords}
      valueKey={{ key: 'value', reduce: true }}
      labelKey={(c) => c.label}
      closeOnChange={false}
      placeholder="Add chords"
      searchPlaceholder="Search by name"
      onSearch={setSearchString}
      onChange={handleChange}
    />
  );
};

export default ChordSelector;
