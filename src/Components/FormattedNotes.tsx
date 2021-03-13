import { Fragment } from 'react';
import { Note, NoteName } from '../Theory/notes';
import FormattedNote from './FormattedNote';

export interface Props {
  notes: (Note | NoteName)[];
}

const FormattedNotes = ({ notes }: Props) => (
  <>
    {notes.map((n, i) => (
      <Fragment key={n}>
        {i !== 0 && ' '}
        <FormattedNote note={n} />
      </Fragment>
    ))}
  </>
);

export default FormattedNotes;
