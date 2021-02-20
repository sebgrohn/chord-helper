import styled from 'styled-components';
import { ChordName } from '../Theory/chords';
import chords from '../Theory/chords.guitar';
import { transposeNote } from '../Theory/notes';
import tunings, { InstrumentName, Tuning } from '../Theory/tunings.guitar';
import FormattedNote from './FormattedNote';

export interface Props {
  instrument?: InstrumentName;
  chord: ChordName | undefined;
}

const StyledTable = styled.table`
  td {
    width: 30px;
    height: 20px;
    border-bottom: 1px solid gray;
  }

  tr:last-child > td,
  td:first-child {
    border-bottom: none;
  }
`;

const StyledTd = styled.td<{ isMuted?: boolean; isPushed?: boolean }>`
  color: ${({ isMuted, isPushed }) =>
    isMuted || !isPushed ? 'gray' : 'inherit'};

  border-right-style: solid;
  border-right-width: 1px;
  &:first-child {
    border-right-width: 2px;
  }

  border-right-color: ${({ isMuted }) => (isMuted ? 'gray' : 'white')};
`;

const StringChord = ({ instrument = 'guitar', chord }: Props) => {
  const chordsForInstrument = chords[instrument];
  const stringPositions = (chord &&
    chord in chordsForInstrument &&
    chordsForInstrument[chord]) || [null, null, null, null, null, null];
  const reversedPositions = [...stringPositions].reverse();

  const maxPosition =
    stringPositions
      .map((p) => p ?? 0)
      .reduce((acc, p) => (acc > p ? acc : p), 4) + 1;

  const tuning = tunings[instrument] ?? [null, null, null, null, null, null];
  const reversedTuning = [...tuning].reverse() as Tuning;

  return (
    <StyledTable>
      <tbody>
        {reversedPositions.map((p, ii) => (
          <tr key={ii}>
            {new Array(maxPosition).fill(undefined).map((_, i) =>
              p !== null ? (
                <StyledTd key={i} isPushed={i === p}>
                  {(i === 0 || i === p) && (
                    <FormattedNote
                      note={transposeNote(reversedTuning[ii], i)}
                    />
                  )}
                </StyledTd>
              ) : (
                <StyledTd key={i} isMuted>
                  {i === 0 ? (
                    <FormattedNote
                      note={transposeNote(reversedTuning[ii], i)}
                    />
                  ) : (
                    'x'
                  )}
                </StyledTd>
              ),
            )}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default StringChord;
