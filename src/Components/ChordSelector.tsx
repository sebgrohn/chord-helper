import { Select } from 'grommet';
import { useCallback, useMemo, useState } from 'react';
import { ChordName } from '../Theory/chords';

export interface Props {
  chords: ChordName[];
  onAddChord: (chordToAdd: ChordName) => void;
}

const ChordSelector = ({ chords, onAddChord }: Props) => {
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
      setSearchString('');
      onAddChord(value as ChordName);
    },
    [onAddChord],
  );

  return (
    <Select
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
