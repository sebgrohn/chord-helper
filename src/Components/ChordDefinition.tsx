import { Fragment } from 'react';
import { ChordName, getChordNotes } from '../Theory/chords';
import FormattedNote from './FormattedNote';

export interface Props {
  chord?: ChordName;
}

const ChordDefinition = ({ chord }: Props) => {
  if (!chord) {
    return null;
  }

  const chordNotes = getChordNotes(chord);
  return (
    <div>
      Notes:{' '}
      {chordNotes.map((n) => (
        <Fragment key={n}>
          <FormattedNote note={n} />{' '}
        </Fragment>
      ))}
    </div>
  );
};

export default ChordDefinition;
