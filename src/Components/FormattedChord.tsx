import styled from 'styled-components';
import { ChordName } from '../Theory/chords';

const chordNamePattern = /^\s*([A-G])(#)?(|maj6|dom7|maj7|aug|aug7|min|min6|min7)\s*$/;

const getNoteParts = (chord: ChordName) => {
  const [_, rootNoteName, hash, chordModifier] =
    chordNamePattern.exec(chord) ?? [];
  return [rootNoteName, hash, chordModifier];
};

const ChordModifier = styled.span`
  padding-left: ${({ theme }) => theme.global.borderSize.small};
`;

export interface Props {
  chord: ChordName;
}

const FormattedChord = ({ chord }: Props) => {
  const [rootNoteName, hash, chordModifier] = getNoteParts(chord);
  return (
    <span>
      {rootNoteName}
      <sup>{hash && '♯'}</sup>
      {chordModifier && <ChordModifier>{chordModifier}</ChordModifier>}
    </span>
  );
};

export default FormattedChord;
