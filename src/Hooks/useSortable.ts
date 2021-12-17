import type { RefObject } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const DRAG_TYPE = 'DEFAULT';

const useSortable = (
  index: number,
  isDraggingEnabled: boolean,
  ref: RefObject<HTMLElement>,
  onMove?: (toMoveHereIndex: number) => void,
): boolean => {
  const [{ isDragging }, drag] = useDrag({
    type: DRAG_TYPE,
    item: { index },
    canDrag: isDraggingEnabled,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, drop] = useDrop({
    accept: DRAG_TYPE,
    hover: (item: { index: number }, monitor) => {
      const indexToMove = item.index;
      const targetIndex = index;

      if (indexToMove === targetIndex || !ref.current) {
        return;
      }

      // Determine rectangle on screen
      const targetBoundingRect = ref.current.getBoundingClientRect();

      // Get horizontal middle
      const targetMiddleX =
        (targetBoundingRect.right - targetBoundingRect.left) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset()!;

      // Get pixels to the left
      const hoverClientX = clientOffset.x - targetBoundingRect.left;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging to the right, only move when the cursor is below 50%
      // When dragging to the left, only move when the cursor is above 50%

      // Dragging to the right
      if (indexToMove < targetIndex && hoverClientX < targetMiddleX) {
        return;
      }

      // Dragging to the left
      if (indexToMove > targetIndex && hoverClientX > targetMiddleX) {
        return;
      }

      onMove?.(indexToMove);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = targetIndex;
    },
  });

  drag(drop(ref));

  return isDragging;
};

export default useSortable;
