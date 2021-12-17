import { Collapsible, Select } from 'grommet';
import { Add } from 'grommet-icons';
import type { MutableRefObject } from 'react';
import { useCallback, useMemo, useState } from 'react';
import type { ChordName } from '../../../Theory/chords';

export interface Props {
  chords: ChordName[];
  isEditing: boolean;
  onAdd: (chordToAdd: ChordName) => void;
  focusRef: MutableRefObject<((options?: FocusOptions) => void) | undefined>;
}

const ChordSelector = ({ chords, isEditing, focusRef, onAdd }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchString, setSearchString] = useState('');

  focusRef.current = useCallback(
    // delay of 300 ms to allow for Collapsible animation to end
    () => setTimeout(() => setIsOpen(true), 300),
    [setIsOpen],
  );

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
        open={isOpen}
        options={matchingChords}
        valueKey={{ key: 'value', reduce: true }}
        labelKey={(c) => c.label}
        closeOnChange={false}
        placeholder="Add chords"
        searchPlaceholder="Search by name"
        a11yTitle="Select chords to add"
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        onSearch={setSearchString}
        onChange={handleChange}
      />
    </Collapsible>
  );
};

export default ChordSelector;
