import { Collapsible, Select } from 'grommet';
import { Add } from 'grommet-icons';
import { useCallback, useMemo, useState } from 'react';
import type { ChordName } from '../../../Theory/chords';

export interface Props {
  chords: ChordName[];
  isEditing: boolean;
  onAdd: (chordToAdd: ChordName) => void;
}

const ChordSelector = ({ chords, isEditing, onAdd }: Props) => {
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
      onAdd(value as ChordName);
    },
    [onAdd],
  );

  return (
    <Collapsible open={isEditing} direction="horizontal">
      <Select
        icon={<Add />}
        options={matchingChords}
        valueKey={{ key: 'value', reduce: true }}
        labelKey={(c) => c.label}
        closeOnChange={false}
        placeholder="Add chords"
        searchPlaceholder="Search by name"
        a11yTitle="Select chords to add"
        onSearch={setSearchString}
        onChange={handleChange}
      />
    </Collapsible>
  );
};

export default ChordSelector;
