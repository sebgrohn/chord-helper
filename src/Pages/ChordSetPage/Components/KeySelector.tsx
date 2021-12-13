import { Collapsible, Select } from 'grommet';
import { Filter } from 'grommet-icons';
import { useCallback, useMemo, useState } from 'react';
import type { KeyName } from '../../../Theory/keys';

export interface Props {
  selectedKey?: KeyName;
  keys: KeyName[];
  suggestedKeys: KeyName[];
  isEditing: boolean;
  onChange: (newKey?: KeyName) => void;
}

const ChordSelector = ({
  selectedKey,
  suggestedKeys,
  keys,
  isEditing,
  onChange,
}: Props) => {
  const [searchString, setSearchString] = useState('');
  const matchingKeys = useMemo(() => {
    if (!searchString && suggestedKeys.length > 0) {
      return [
        { label: 'Suggested keys' },
        ...suggestedKeys.map((k) => ({
          label: k,
          value: k,
        })),
        { label: 'Other keys' },
        ...keys
          .filter((k) => !suggestedKeys.includes(k))
          .map((k) => ({ label: k, value: k })),
      ];
    }

    return keys
      .map((k) => ({ label: k, value: k }))
      .filter((x) =>
        x.label.toLowerCase().includes(searchString.toLowerCase()),
      );
  }, [keys, searchString, suggestedKeys]);

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
        disabledKey={(c) => c.value === undefined}
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
