import { Box, Button, Collapsible } from 'grommet';
import { Checkmark, Edit } from 'grommet-icons';

export interface Props {
  isEditing: boolean;
  onIsEditingChange: (isEditing: boolean) => void;
}

const EditButton = ({ isEditing, onIsEditingChange }: Props) => (
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
    a11yTitle={isEditing ? 'Done adding/removing chords' : 'Add/remove chords'}
    primary={isEditing}
    onClick={() => onIsEditingChange(!isEditing)}
  />
);

export default EditButton;
