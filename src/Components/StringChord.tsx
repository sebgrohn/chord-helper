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

  cursor: pointer;
  user-select: none;

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

const PushedNoteCircle = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  text-align: center;
`;

const StyledTd = styled.td<{
  isStringMuted: boolean;
  isNoteVisible: boolean;
  isNoteActive: boolean;
  isNotePushed: boolean;
}>`
  ${({ isStringMuted, isNoteActive, theme }) =>
    isStringMuted
      ? css`
          color: ${theme.global.colors['text-xweak'].dark};
        `
      : css`
          background: ${theme.global.colors['background-contrast'].dark};
          color: ${isNoteActive
            ? theme.global.colors['text'].dark
            : theme.global.colors['text-weak'].dark};
        `}

  font-weight: ${({ isNoteActive }) => (isNoteActive ? 'bold' : 'normal')};

  ${PushedNoteCircle} {
    display: ${({ isNoteVisible }) =>
      isNoteVisible ? 'inline-block' : 'none'};

    background: ${({ isNotePushed, theme }) =>
      isNotePushed ? theme.global.colors['border'].dark : 'transparent'};
  }

  &:hover {
    ${PushedNoteCircle} {
      display: inline-block;

      background: ${({ isNotePushed, theme }) =>
        isNotePushed
          ? theme.global.colors['accent-1']
          : theme.global.colors['background-contrast'].dark};

      font-weight: bold;
    }

    & > :nth-child(2) {
      display: none;
    }
  }
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
      isStringMuted: p === null,
      isNoteVisible: i === p || i === 0,
      isNoteActive: i === p,
      isNotePushed: i === p && i !== 0,
      note: transposeNote(reversedTuning[j], i),
    })),
  );

  return (
    <StyledTable>
      <tbody>
        {reversedStringNotes.map((s, j) => (
          <tr key={j}>
            {s.map(
              (
                {
                  isStringMuted,
                  isNoteVisible,
                  isNoteActive,
                  isNotePushed,
                  note,
                },
                i,
              ) => (
                <StyledTd
                  key={note}
                  isStringMuted={isStringMuted}
                  isNoteVisible={isNoteVisible}
                  isNoteActive={isNoteActive}
                  isNotePushed={isNotePushed}
                >
                  <PushedNoteCircle>
                    <FormattedNote note={note} />
                  </PushedNoteCircle>
                  {isStringMuted && !isNoteVisible && <Text>🞩</Text>}
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
