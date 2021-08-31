import { Box, Grid, Text } from 'grommet';
import { Close } from 'grommet-icons';
import styled, { css } from 'styled-components';
import { ChordName } from '../Theory/chords';
import chords, {
  FretId,
  getStringPositionsParts,
  StringId,
} from '../Theory/chords.guitar';
import { getNoteParts, NoteName, transposeNote } from '../Theory/notes';
import tunings, { InstrumentName } from '../Theory/tunings.guitar';
import FormattedNote from './FormattedNote';

const PushedFingerBox = styled(Box)`
  width: 36px;
  height: calc(100% - 12px);
  justify-self: center;
  border-radius: 18px;
`;

const NoteCircleText = styled(Text)`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  text-align: center;
`;

const NoteBox = styled(Box)<{
  disabled: boolean;
  isStringMuted: boolean;
  isVisible: boolean;
  isActive: boolean;
  isPushed: boolean;
}>`
  width: 100%;
  height: 100%;

  color: ${({ isStringMuted, isActive, theme }) =>
    isStringMuted
      ? theme.global.colors['text-xweak'].dark
      : isActive
      ? theme.global.colors['text'].dark
      : theme.global.colors['text-weak'].dark};

  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};

  ${NoteCircleText} {
    display: ${({ isVisible }) => (isVisible ? 'inline-block' : 'none')};
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
        ${NoteCircleText} {
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

/**
 * All parameters are zero-based, inclusive.
 *
 * @param x1 Start column (zero-based, inclusive)
 * @param y1 Start row (zero-based, inclusive)
 * @param x2 Optional end column (zero-based, inclusive), defaults to `x1`
 * @param y2 Optional end row (zero-based, inclusive), defaults to `y1`
 */
const getGridArea = (x1: number, y1: number, x2?: number, y2?: number) =>
  `${y1 + 1}/${x1 + 1} / ${(y2 ?? y1) + 1 + 1}/${(x2 ?? x1) + 1 + 1}`;

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
  const stringPositionsParts = getStringPositionsParts(stringPositions);
  const mutedStrings = chordDefinition?.mutedStrings ?? [];

  const maxFretId = (stringPositionsParts.reduce(
    (acc, { fretId }) => Math.max(acc, fretId),
    4,
  ) + 1) as FretId;

  const tuning = tunings[instrument] ?? [null, null, null, null, null, null];
  const maxStringIndex = tuning.length - 1;

  const strings = tuning.map((_, stringIndex) => ({
    gridArea: getGridArea(
      1,
      maxStringIndex - stringIndex,
      maxFretId,
      maxStringIndex - stringIndex,
    ),
    isMuted: mutedStrings.includes((stringIndex + 1) as StringId),
  }));

  const frets = new Array(maxFretId).fill(undefined).map((_, fretId) => ({
    gridArea: getGridArea(fretId, 0, fretId, maxStringIndex),
    isStart: fretId === 0,
  }));

  const positions = stringPositionsParts.map(
    ({ startStringId, endStringId, fretId, fingerIndex }) => ({
      gridArea: getGridArea(
        fretId,
        maxStringIndex - (endStringId - 1),
        fretId,
        maxStringIndex - (startStringId - 1),
      ),
      finger: fingerIndex + 1,
    }),
  );

  const notes = tuning.map((stringNote, stringIndex) => {
    const stringId = (stringIndex + 1) as StringId;
    const isStringMuted = mutedStrings.includes(stringId);

    return new Array(maxFretId).fill(undefined).map((_, i) => {
      const isActive = !!stringPositionsParts.find(
        ({ startStringId, endStringId, fretId }) =>
          stringId >= startStringId && stringId <= endStringId && i === fretId,
      );
      const note = transposeNote(stringNote, i);
      const [noteName] = getNoteParts(note);

      return {
        gridArea: getGridArea(i, maxStringIndex - stringIndex),
        isStringMuted,
        isVisible: isActive || i === 0,
        isActive: isActive,
        isPushed: isActive && i !== 0,
        isHighlighted: !disabled && highlightedNote === noteName,
        note,
        noteName,
      };
    });
  });

  return (
    <Grid
      columns={Array(maxFretId).fill('1fr')}
      rows={Array(maxStringIndex + 1).fill('xxsmall')}
      gap={{ row: 'xxsmall' }}
    >
      {strings.map(({ gridArea, isMuted }) => (
        <Box
          key={gridArea}
          gridArea={gridArea}
          background={!isMuted ? 'background-contrast' : undefined}
          border={[
            {
              side: 'bottom',
              color: 'background-contrast',
              size: 'small',
            },
          ]}
        />
      ))}

      {frets.map(({ gridArea, isStart }) => (
        <Box
          key={gridArea}
          gridArea={gridArea}
          border={{
            side: 'right',
            color: 'text',
            size: isStart ? 'small' : 'xsmall',
          }}
        />
      ))}

      {positions.map(({ gridArea, finger }) => (
        <PushedFingerBox
          key={gridArea}
          gridArea={gridArea}
          alignSelf="center"
          background={{ dark: 'border' }}
        />
      ))}

      {notes.map((s) =>
        s.map(
          ({
            isStringMuted,
            isVisible,
            isActive,
            isPushed,
            isHighlighted,
            note,
            noteName,
            gridArea,
          }) => (
            <NoteBox
              key={gridArea}
              gridArea={gridArea}
              align="center"
              justify="center"
              disabled={disabled}
              isStringMuted={isStringMuted}
              isVisible={isVisible || isHighlighted}
              isActive={isActive || isHighlighted}
              isPushed={isPushed}
              onClick={
                !disabled && onHighlightNote
                  ? () => onHighlightNote(isHighlighted ? undefined : noteName)
                  : undefined
              }
            >
              <NoteCircleText textAlign="center">
                <FormattedNote note={note} />
              </NoteCircleText>
              {isStringMuted && <Close size="small" />}
            </NoteBox>
          ),
        ),
      )}
    </Grid>
  );
};

export default StringChord;
