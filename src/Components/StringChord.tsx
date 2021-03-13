import { Close } from 'grommet-icons';
import styled, { css } from 'styled-components';
import { ChordName } from '../Theory/chords';
import chords from '../Theory/chords.guitar';
import { getNoteParts, NoteName, transposeNote } from '../Theory/notes';
import tunings, { InstrumentName, Tuning } from '../Theory/tunings.guitar';
import FormattedNote from './FormattedNote';

export interface Props {
  instrument?: InstrumentName;
  chord: ChordName | undefined;
  highlightedNote: NoteName | undefined;
  onHighlightNote: ((noteToSelect: NoteName | undefined) => void) | undefined;
}

const StyledTable = styled.table`
  box-sizing: border-box;

  cursor: pointer;
  user-select: none;

  width: 100%;
  height: 100%;

  text-align: center;

  td {
    min-width: 36px;
    height: 36px;

    border-bottom: ${({ theme }) => theme.global.borderSize.xsmall} solid
      ${({ theme }) => theme.global.colors['background-contrast'].dark};
    border-right: ${({ theme }) => theme.global.borderSize.xsmall} solid
      ${({ theme }) => theme.global.colors['text'].dark};

    &:first-child {
      min-width: 24px;
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
  width: 34px;
  height: 34px;
  border-radius: 18px;
  text-align: center;
`;

const StyledTd = styled.td<{
  isStringMuted: boolean;
  isVisible: boolean;
  isActive: boolean;
  isPushed: boolean;
}>`
  ${({ isStringMuted, isActive, theme }) =>
    isStringMuted
      ? css`
          color: ${theme.global.colors['text-xweak'].dark};
        `
      : css`
          background: ${theme.global.colors['background-contrast'].dark};
          color: ${isActive
            ? theme.global.colors['text'].dark
            : theme.global.colors['text-weak'].dark};
        `}

  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};

  ${PushedNoteCircle} {
    display: ${({ isVisible }) => (isVisible ? 'inline-block' : 'none')};

    background: ${({ isPushed, theme }) =>
      isPushed ? theme.global.colors['border'].dark : 'transparent'};
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      & > :nth-child(2) {
        display: none;
      }
    `}

  &:hover {
    ${PushedNoteCircle} {
      display: inline-block;

      background: ${({ isPushed, theme }) =>
        isPushed
          ? theme.global.colors['accent-1']
          : theme.global.colors['background-contrast'].dark};

      font-weight: bold;
    }

    & > :nth-child(2) {
      display: none;
    }
  }
`;

const StringChord = ({
  instrument = 'guitar',
  chord,
  highlightedNote,
  onHighlightNote,
}: Props) => {
  const chordsForInstrument = chords[instrument];
  const stringPositions = (chord &&
    chord in chordsForInstrument &&
    chordsForInstrument[chord]) || [0, 0, 0, 0, 0, 0];
  const reversedPositions = [...stringPositions].reverse();

  const maxPosition =
    stringPositions
      .map((p) => p ?? 0)
      .reduce((acc, p) => (acc > p ? acc : p), 4) + 1;

  const tuning = tunings[instrument] ?? [null, null, null, null, null, null];
  const reversedTuning = [...tuning].reverse() as Tuning;

  const reversedStringNotes = reversedPositions.map((p, j) =>
    new Array(maxPosition).fill(undefined).map((_, i) => {
      const note = transposeNote(reversedTuning[j], i);
      const [noteName] = getNoteParts(note);
      return {
        isStringMuted: p === null,
        isVisible: i === p || i === 0,
        isActive: i === p,
        isPushed: i === p && i !== 0,
        isHighlighted: highlightedNote === noteName,
        note,
        noteName,
      };
    }),
  );

  return (
    <StyledTable>
      <tbody>
        {reversedStringNotes.map((s, j) => (
          <tr key={j}>
            {s.map(
              ({
                isStringMuted,
                isVisible,
                isActive,
                isPushed,
                isHighlighted,
                note,
                noteName,
              }) => (
                <StyledTd
                  key={`${j}${note}`}
                  isStringMuted={isStringMuted}
                  isVisible={isVisible || isHighlighted}
                  isActive={isActive || isHighlighted}
                  isPushed={isPushed}
                  onClick={
                    onHighlightNote &&
                    (() =>
                      onHighlightNote(isHighlighted ? undefined : noteName))
                  }
                >
                  <PushedNoteCircle>
                    <FormattedNote note={note} />
                  </PushedNoteCircle>
                  {isStringMuted && !isVisible && <Close size="small" />}
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
