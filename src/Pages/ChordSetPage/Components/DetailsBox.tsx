import { Box, Keyboard, Text, TextInput } from 'grommet';
import FormattedKey from '../../../Components/FormattedKey';
import PageHeading from '../../../Components/PageHeading';
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
      <Box>
        <Box direction="row" align="baseline" gap="small">
          <PageHeading>
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
          </PageHeading>
          {selectedKey && !isEditing && (
            <Text size="large">
              in <FormattedKey keyName={selectedKey} />
            </Text>
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
