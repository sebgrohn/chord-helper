import { useCallback } from 'react';
import * as actions from '../../Store/actions';
import * as selectors from '../../Store/selectors';
import type { PageProps } from '../Types';
import ChordSetsPage from './Components/ChordSetsPage';

const ChordSetsPageContainer = ({ state, dispatch }: PageProps) => {
  const chordSets = selectors.getChordSets(state);

  const handleAddChordSet = useCallback(
    () => dispatch(actions.addChordSet()),
    [dispatch],
  );

  const handleMoveChordSet = useCallback(
    (chordSetToMoveIndex, targetChordSetIndex) =>
      dispatch(actions.moveChordSet(chordSetToMoveIndex, targetChordSetIndex)),
    [dispatch],
  );

  const handleRemoveChordSet = useCallback(
    (chordSetToRemoveIndex) =>
      dispatch(actions.removeChordSet(chordSetToRemoveIndex)),
    [dispatch],
  );

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
