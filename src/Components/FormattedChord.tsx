import styled from 'styled-components';
import type { ChordName } from '../Theory/chords';

const chordNamePattern =
  /^\s*([A-G])(#)?(|maj6|dom7|maj7|aug|aug7|min|min6|min7)\s*$/;

const getNoteParts = (chord: ChordName) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, rootNoteName, hash, chordModifier] =
    chordNamePattern.exec(chord) ?? [];
  return [rootNoteName, hash, chordModifier];
};

const ChordModifier = styled.span`
  padding-left: ${({ theme }) => theme.global.borderSize.small};
`;

export interface Props {
  chord: ChordName | undefined;
}

const FormattedChord = ({ chord }: Props) => {
  const [rootNoteName, hash, chordModifier] = chord ? getNoteParts(chord) : [];
  return (
    <span>
      {rootNoteName || <>&nbsp;</>}
      <sup>{hash && '♯'}</sup>
      {chordModifier && <ChordModifier>{chordModifier}</ChordModifier>}
    </span>
  );
};

export default FormattedChord;
