import type { KeyName } from '../Theory/keys';
import { getKeyNameParts } from '../Theory/keys';
import { Modifier } from './FormattedChord';
import FormattedNoteName from './FormattedNoteName';

export interface Props {
  keyName: KeyName;
}

const FormattedKey = ({ keyName }: Props) => {
  const [rootNoteName, keyModifier] = keyName ? getKeyNameParts(keyName) : [];
  return (
    <span>
      <FormattedNoteName note={rootNoteName} />
      {keyModifier && <Modifier>{keyModifier}</Modifier>}
    </span>
  );
};

export default FormattedKey;
