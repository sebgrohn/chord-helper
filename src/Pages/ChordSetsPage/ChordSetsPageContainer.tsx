import type { Dispatch } from 'react';
import { useCallback } from 'react';
import * as actions from '../../Store/actions';
import * as selectors from '../../Store/selectors';
import type { PageProps } from '../Types';
import ChordSetsPage from './Components/ChordSetsPage';

const useDispatchAction =
  (dispatch: Dispatch<actions.Action>) =>
  <T extends Array<unknown>>(action: (...args: [...T]) => actions.Action) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useCallback(
      (...args: [...T]) => dispatch(action(...args)),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [action, dispatch],
    );

const ChordSetsPageContainer = ({ state, dispatch }: PageProps) => {
  const dispatchAction = useDispatchAction(dispatch);

  const chordSets = selectors.getChordSets(state);

  const handleAddChordSet = dispatchAction(actions.addChordSet);
  const handleMoveChordSet = dispatchAction(actions.moveChordSet);
  const handleRemoveChordSet = dispatchAction(actions.removeChordSet);

  return (
    <ChordSetsPage
      chordSets={chordSets}
      onAddChordSet={handleAddChordSet}
      onMoveChordSet={handleMoveChordSet}
      onRemoveChordSet={handleRemoveChordSet}
    />
  );
};

export default ChordSetsPageContainer;
