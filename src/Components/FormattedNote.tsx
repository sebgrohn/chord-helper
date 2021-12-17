import type { Note, NoteName } from '../Theory/notes';

const notePattern = /^\s*([A-G])(#)?(\d)?\s*$/;

const getNoteParts = (note: Note | NoteName) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, noteName, hash, octave] = notePattern.exec(note) ?? [];
  return [noteName, hash, octave];
};

export interface Props {
  note: Note | NoteName;
}

const FormattedNote = ({ note }: Props) => {
  const [noteName, hash, octave] = getNoteParts(note);
  return (
    <span>
      {noteName}
      <sup>{hash && '♯'}</sup>
      {octave && <sub>{octave}</sub>}
    </span>
  );
};

export default FormattedNote;
