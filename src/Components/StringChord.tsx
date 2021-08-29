import { Close } from 'grommet-icons';
import styled, { css } from 'styled-components';
import { ChordName } from '../Theory/chords';
import chords, { StringId } from '../Theory/chords.guitar';
import { getNoteParts, NoteName, transposeNote } from '../Theory/notes';
import tunings, { InstrumentName } from '../Theory/tunings.guitar';
import FormattedNote from './FormattedNote';

const StyledTable = styled.table`
  box-sizing: border-box;

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

const NoteCircle = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  text-align: center;
`;

const StyledTd = styled.td<{
  disabled: boolean;
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

  ${NoteCircle} {
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

  ${({ disabled, isPushed, theme }) =>
    !disabled &&
    css`
      cursor: pointer;

      &:hover {
        ${NoteCircle} {
          display: inline-block;

          background: ${isPushed
            ? theme.global.colors['accent-1']
            : theme.global.colors['background-contrast'].dark};

          font-weight: bold;
        }

        & > :nth-child(2) {
          display: none;
        }
      }
    `}
`;

export interface Props {
  instrument?: InstrumentName;
  chord: ChordName | undefined;
  disabled: boolean;
  highlightedNote: NoteName | undefined;
  onHighlightNote: ((noteToSelect: NoteName | undefined) => void) | undefined;
}

const StringChord = ({
  instrument = 'guitar',
  chord,
  disabled,
  highlightedNote,
  onHighlightNote,
}: Props) => {
  const chordsForInstrument = chords[instrument] || [];
  const chordDefinition =
    chord && chordsForInstrument.find((c) => c.chord === chord);

  const stringPositions = chordDefinition?.positions ?? [
    null,
    null,
    null,
    null,
  ];
  const mutedStrings = chordDefinition?.mutedStrings ?? [];

  const maxFret =
    stringPositions
      .map((p) => (p && p[1]) ?? 0)
      .reduce((acc, p) => (acc > p ? acc : p), 4) + 1;

  const tuning = tunings[instrument] ?? [null, null, null, null, null, null];

  const reversedStringNotes = tuning
    .map((s, j) => {
      const stringId = (j + 1) as StringId;
      const isStringMuted = mutedStrings.includes(stringId);

      const ps = stringPositions
        .filter((p) => {
          if (!p) {
            return false;
          }

          const [stringIdOrInterval] = p;
          const [startStringId, endStringId] = Array.isArray(stringIdOrInterval)
            ? stringIdOrInterval
            : [stringIdOrInterval, stringIdOrInterval];

          return stringId >= startStringId && stringId <= endStringId;
        })
        .map((p) => (p && p[1]) ?? 0) as number[];

      return new Array(maxFret).fill(undefined).map((_, i) => {
        const note = transposeNote(s, i);
        const [noteName] = getNoteParts(note);
        return {
          isStringMuted,
          isVisible: ps.includes(i) || i === 0,
          isActive: ps.includes(i),
          isPushed: ps.includes(i) && i !== 0,
          isHighlighted: !disabled && highlightedNote === noteName,
          note,
          noteName,
        };
      });
    })
    .reverse();

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
                  disabled={disabled}
                  isStringMuted={isStringMuted}
                  isVisible={isVisible || isHighlighted}
                  isActive={isActive || isHighlighted}
                  isPushed={isPushed}
                  onClick={
                    !disabled && onHighlightNote
                      ? () =>
                          onHighlightNote(isHighlighted ? undefined : noteName)
                      : undefined
                  }
                >
                  <NoteCircle>
                    <FormattedNote note={note} />
                  </NoteCircle>
                  {isStringMuted && <Close size="small" />}
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
