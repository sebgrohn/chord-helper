import { Box, Grid, ResponsiveContext, Text } from 'grommet';
import { Close } from 'grommet-icons';
import { useContext } from 'react';
import styled, { css } from 'styled-components';
import FormattedNote from '../../../Components/FormattedNote';
import type { ChordName } from '../../../Theory/chords';
import type { FretId, StringId } from '../../../Theory/chords.guitar';
import chords, { getStringPositionsParts } from '../../../Theory/chords.guitar';
import { getNoteParts, NoteName, transposeNote } from '../../../Theory/notes';
import type { InstrumentName } from '../../../Theory/tunings.guitar';
import tunings from '../../../Theory/tunings.guitar';

const PushedFingerBox = styled(Box)<{
  noteCircleSize: string;
  gridCellWidth: string;
}>`
  width: calc(
    100% - ${({ gridCellWidth }) => gridCellWidth} +
      ${({ noteCircleSize }) => noteCircleSize}
  );
  height: ${({ noteCircleSize }) => noteCircleSize};
  border-radius: calc(${({ noteCircleSize }) => noteCircleSize} / 2);
  justify-self: center;
`;

const NoteCircleText = styled(Text)<{ noteCircleSize: string }>`
  width: ${({ noteCircleSize }) => noteCircleSize};
  height: ${({ noteCircleSize }) => noteCircleSize};
  border-radius: calc(${({ noteCircleSize }) => noteCircleSize} / 2);
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
 * @param startFretId Start fret (zero-based, inclusive)
 * @param startStringIndex Start string (zero-based, inclusive)
 * @param endFretId Optional end fret (zero-based, inclusive), defaults to start fret
 * @param endStringIndex Optional end string (zero-based, inclusive), defaults to start string
 */
const getGridArea = (
  startFretId: number,
  startStringIndex: number,
  endFretId?: number,
  endStringIndex?: number,
) => {
  const start = `${startFretId * 2 + 1}/${startStringIndex * 2 + 1}`;
  const end = `${(endFretId ?? startFretId) * 2 + 3}/${
    (endStringIndex ?? startStringIndex) * 2 + 3
  }`;
  return `${start} / ${end}`;
};

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
    (acc, { fretId }) => Math.max(acc, fretId + 1),
    4,
  ) + 1) as FretId;

  const tuning = tunings[instrument] ?? [null, null, null, null, null, null];
  const maxStringIndex = tuning.length - 1;

  const strings = tuning.map((_, stringIndex) => ({
    gridArea: getGridArea(1, stringIndex + 0.5, maxFretId, stringIndex + 0.5),
    isMuted: mutedStrings.includes((stringIndex + 1) as StringId),
  }));

  const frets = new Array(maxFretId).fill(undefined).map((_, fretId) => ({
    gridArea: getGridArea(fretId, 0.5, fretId, maxStringIndex - 0.5),
    isStart: fretId === 0,
  }));

  const positions = stringPositionsParts.map(
    ({ startStringId, endStringId, fretId, fingerIndex }) => ({
      gridArea: getGridArea(fretId, startStringId - 1, fretId, endStringId - 1),
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
        gridArea: getGridArea(i, stringIndex),
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

  const isSmallSize = useContext(ResponsiveContext) === 'small';
  const noteCircleSize = isSmallSize ? '20px' : '30px';
  const gridCellWidth = isSmallSize ? '24px' : '36px';

  return (
    <Grid
      columns={Array((maxStringIndex + 1) * 2).fill(
        isSmallSize ? '12px' : '18px',
      )}
      rows={Array(maxFretId * 2).fill(isSmallSize ? '14px' : '21px')}
    >
      {strings.map(({ gridArea }) => (
        <Box
          key={gridArea}
          gridArea={gridArea}
          border={[
            {
              side: 'left',
              color: 'text-xweak',
              size: 'xsmall',
            },
          ]}
        />
      ))}

      {frets.map(({ gridArea, isStart }) => (
        <Box
          key={gridArea}
          gridArea={gridArea}
          border={{
            side: 'bottom',
            color: 'text',
            size: isStart ? 'medium' : 'xsmall',
          }}
        />
      ))}

      {positions.map(({ gridArea, finger }) => (
        <PushedFingerBox
          key={gridArea}
          gridArea={gridArea}
          noteCircleSize={noteCircleSize}
          gridCellWidth={gridCellWidth}
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
              <NoteCircleText
                noteCircleSize={noteCircleSize}
                size={isSmallSize ? 'xsmall' : 'medium'}
                textAlign="center"
              >
                <FormattedNote note={note} />
              </NoteCircleText>
              {isStringMuted && <Close size={isSmallSize ? '8px' : '12px'} />}
            </NoteBox>
          ),
        ),
      )}
    </Grid>
  );
};

export default StringChord;
