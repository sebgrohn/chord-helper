import type { NoteName } from '../Theory/notes';

const noteNamePattern = /^\s*([A-G])(#)?\s*$/;

const getNoteNameParts = (note: NoteName) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, rootNoteName, sharp] = noteNamePattern.exec(note) ?? [];
  return [rootNoteName, sharp];
};

export interface Props {
  note: NoteName | undefined;
}

const FormattedNoteName = ({ note }: Props) => {
  const [noteNameWithoutSharp, sharp] = note ? getNoteNameParts(note) : [];
  return (
    <>
      {noteNameWithoutSharp || <>&nbsp;</>}
      <sup>{sharp && '♯'}</sup>
    </>
  );
};

export default FormattedNoteName;
