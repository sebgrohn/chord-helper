import { Collapsible, Select } from 'grommet';
import { Filter } from 'grommet-icons';
import { useCallback, useMemo, useState } from 'react';
import type { KeyName } from '../../../Theory/keys';

export interface Props {
  selectedKey?: KeyName;
  keys: KeyName[];
  isEditing: boolean;
  onChange: (newKey?: KeyName) => void;
}

const ChordSelector = ({ selectedKey, keys, isEditing, onChange }: Props) => {
  const [searchString, setSearchString] = useState('');
  const matchingKeys = useMemo(
    () =>
      keys
        .map((k) => ({ label: k, value: k }))
        .filter((x) =>
          x.label.toLowerCase().includes(searchString.toLowerCase()),
        ),
    [keys, searchString],
  );

  const handleChange = useCallback(
    ({ value }) => {
      setSearchString('');
      onChange((value || undefined) as KeyName | undefined);
    },
    [onChange],
  );

  return (
    <Collapsible open={isEditing} direction="horizontal">
      <Select
        icon={<Filter />}
        value={selectedKey}
        clear={{ label: 'Clear key filter' }}
        options={matchingKeys}
        valueKey={{ key: 'value', reduce: true }}
        labelKey={(c) => c.label}
        placeholder="Filter by key"
        searchPlaceholder="Search by name"
        a11yTitle="Filter chords by key"
        onSearch={setSearchString}
        onChange={handleChange}
      />
    </Collapsible>
  );
};

export default ChordSelector;
