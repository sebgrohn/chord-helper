import styled from 'styled-components';
import type { ChordName } from '../Theory/chords';
import { getChordNameParts } from '../Theory/chords';
import FormattedNoteName from './FormattedNoteName';

const ChordModifier = styled.span`
  padding-left: ${({ theme }) => theme.global.borderSize.small};
`;

export interface Props {
  chord: ChordName | undefined;
}

const FormattedChord = ({ chord }: Props) => {
  const [rootNoteName, chordModifier] = chord ? getChordNameParts(chord) : [];
  return (
    <span>
      <FormattedNoteName note={rootNoteName} />
      {chordModifier && <ChordModifier>{chordModifier}</ChordModifier>}
    </span>
  );
};

export default FormattedChord;
