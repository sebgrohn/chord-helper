import { Text } from 'grommet';
import styled, { css } from 'styled-components';
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
  box-sizing: border-box;

  width: 100%;
  height: 100%;

  text-align: center;

  td {
    min-width: 70px;
    height: 40px;

    border-bottom: ${({ theme }) => theme.global.borderSize.xsmall} solid
      ${({ theme }) => theme.global.colors['background-contrast'].dark};
    border-right: ${({ theme }) => theme.global.borderSize.xsmall} solid
      ${({ theme }) => theme.global.colors['text'].dark};

    &:first-child {
      min-width: 40px;
      border-right-width: ${({ theme }) => theme.global.borderSize.small};

      background: inherit;
    }
  }

  tr:last-child > td,
  td:first-child {
    border-bottom: none;
  }
`;

const StyledTd = styled.td<{ isMuted: boolean; isPushed: boolean }>`
  ${({ isMuted, isPushed, theme }) =>
    isMuted
      ? css`
          color: ${theme.global.colors['text-xweak'].dark};
        `
      : css`
          background: ${theme.global.colors['background-contrast'].dark};
          color: ${isPushed
            ? theme.global.colors['text'].dark
            : theme.global.colors['text-weak'].dark};
        `}

  font-weight: ${({ isPushed }) => (isPushed ? 'bold' : 'normal')};
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

  const reversedStringNotes = reversedPositions.map((p, j) =>
    new Array(maxPosition).fill(undefined).map((_, i) => ({
      isPushed: i === p,
      isMuted: p === null,
      note: transposeNote(reversedTuning[j], i),
    })),
  );

  return (
    <StyledTable>
      <tbody>
        {reversedStringNotes.map((s, j) => (
          <tr key={j}>
            {s.map(({ isPushed, isMuted, note }, i) => (
              <StyledTd key={note} isMuted={isMuted} isPushed={isPushed}>
                {i === 0 || isPushed ? (
                  <FormattedNote note={note} />
                ) : (
                  <Text>{isMuted && '🞩'}</Text>
                )}
              </StyledTd>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default StringChord;
