import type { Dispatch } from 'react';
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import * as actions from '../../Store/actions';
import * as selectors from '../../Store/selectors';
import { getAllKeys } from '../../Theory/keys';
import NotFoundPage from '../NotFoundPage';
import type { PageProps } from '../Types';
import ChordSetPage from './Components/ChordSetPage';

const useChordSetDispatch =
  (dispatch: Dispatch<actions.Action>, chordSetIndex: number) =>
  <T extends Array<unknown>>(
    action: (chordSetIndex: number, ...args: [...T]) => actions.Action,
  ) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useCallback(
      (...args: [...T]) => dispatch(action(chordSetIndex, ...args)),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [action, chordSetIndex, dispatch],
    );

const ChordSetPageContainer = ({ state, dispatch }: PageProps) => {
  const { chordSetId } = useParams();
  const chordSetIndex = Number.parseInt(chordSetId!);

  const chordSetDispatch = useChordSetDispatch(dispatch, chordSetIndex);

  const allKeys = getAllKeys();
  const chordSet = selectors.getChordSet(chordSetIndex)(state);
  const filteredChords = selectors.getFilteredChords(chordSetIndex)(state);
  const suggestedKeys = selectors.getSuggestedKeys(chordSetIndex)(state);

  const handleSetName = chordSetDispatch(actions.setChordSetName);
  const handleSetDescription = chordSetDispatch(actions.setChordSetDescription);
  const handleSetKey = chordSetDispatch(actions.setChordSetKey);
  const handleAddChord = chordSetDispatch(actions.addChordToSet);
  const handleMoveChord = chordSetDispatch(actions.moveChordInSet);
  const handleRemoveChord = chordSetDispatch(actions.removeChordFromSet);

  if (!chordSet || !filteredChords || !suggestedKeys) {
    return <NotFoundPage />;
  }

  const { name, description, selectedKey, selectedChords } = chordSet;
  return (
    <ChordSetPage
      name={name}
      description={description}
      selectedKey={selectedKey}
      selectedChords={selectedChords}
      availableKeys={allKeys}
      filteredChords={filteredChords}
      suggestedKeys={suggestedKeys}
      onSetName={handleSetName}
      onSetDescription={handleSetDescription}
      onSetKey={handleSetKey}
      onAddChord={handleAddChord}
      onMoveChord={handleMoveChord}
      onRemoveChord={handleRemoveChord}
    />
  );
};

export default ChordSetPageContainer;
