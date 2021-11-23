import { Box, Heading, Keyboard, Text, TextInput } from 'grommet';
import type { KeyName } from '../../../Theory/keys';

export interface Props {
  name: string;
  description: string;
  selectedKey?: KeyName;
  isEditing: boolean;
  onSetName: (newName: string) => void;
  onSetDescription: (newDescription: string) => void;
  onIsEditingChange: (isEditing: boolean) => void;
}

const DetailsBox = ({
  name,
  description,
  selectedKey,
  isEditing,
  onSetName,
  onSetDescription,
  onIsEditingChange,
}: Props) => {
  return (
    <Keyboard onEnter={() => onIsEditingChange(false)}>
      <Box width="100%">
        <Box direction="row" align="baseline" gap="small">
          <Heading level={2} size="small" margin={{ vertical: 'small' }}>
            {isEditing ? (
              <TextInput
                plain="full"
                value={name}
                placeholder="Enter name"
                onChange={(event) => onSetName(event.target.value)}
              />
            ) : (
              name || <em>Unnamed chord set</em>
            )}{' '}
          </Heading>
          {selectedKey && !isEditing && (
            <Text size="large">in {selectedKey}</Text>
          )}
        </Box>
        <Text>
          {isEditing ? (
            <TextInput
              plain="full"
              value={description}
              placeholder="Enter description"
              onChange={(event) => onSetDescription(event.target.value)}
            />
          ) : (
            description || <em>No description</em>
          )}
        </Text>
      </Box>
    </Keyboard>
  );
};

export default DetailsBox;
