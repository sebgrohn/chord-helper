import { Box, Button, Collapsible, Select } from 'grommet';
import { Add, Checkmark, Edit } from 'grommet-icons';
import { useCallback, useMemo, useState } from 'react';
import { ChordName } from '../Theory/chords';

export interface Props {
  chords: ChordName[];
  isEditing: boolean;
  onAdd: (chordToAdd: ChordName) => void;
  onIsEditingChange: (isEditing: boolean) => void;
}

const ChordSelector = ({
  chords,
  isEditing,
  onAdd,
  onIsEditingChange,
}: Props) => {
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
    <Box direction="row" gap="small" justify="end" align="center">
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
      <Button
        icon={
          <Box direction="row">
            <Collapsible open={isEditing} direction="horizontal">
              <Checkmark />
            </Collapsible>
            <Collapsible open={!isEditing} direction="horizontal">
              <Edit />
            </Collapsible>
          </Box>
        }
        a11yTitle={
          isEditing ? 'Done adding/removing chords' : 'Add/remove chords'
        }
        primary={isEditing}
        onClick={() => onIsEditingChange(!isEditing)}
      />
    </Box>
  );
};

export default ChordSelector;
