import { Note, NoteName } from '../Theory/notes';

export interface Props {
  note: Note | NoteName;
}

const FormattedNote = ({ note }: Props) => {
  return <span>{note}</span>;
};

export default FormattedNote;
