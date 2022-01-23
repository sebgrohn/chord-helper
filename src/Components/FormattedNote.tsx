import type { Note } from '../Theory/notes';
import { getNoteParts } from '../Theory/notes';
import FormattedNoteName from './FormattedNoteName';

export interface Props {
  note: Note;
}

const FormattedNote = ({ note }: Props) => {
  const [noteName, octave] = note ? getNoteParts(note) : [];
  return (
    <span>
      <FormattedNoteName note={noteName} />
      {octave && <sub>{octave}</sub>}
    </span>
  );
};

export default FormattedNote;
