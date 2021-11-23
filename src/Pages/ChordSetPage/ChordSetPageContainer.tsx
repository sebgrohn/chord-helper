import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import * as actions from '../../Store/actions';
import * as selectors from '../../Store/selectors';
import { getAllKeys } from '../../Theory/keys';
import NotFoundPage from '../NotFoundPage';
import type { PageProps } from '../Types';
import ChordSetPage from './Components/ChordSetPage';

const ChordSetPageContainer = ({ state, dispatch }: PageProps) => {
  const { chordSetId } = useParams();
  const chordSetIndex = Number.parseInt(chordSetId!);

  const allKeys = getAllKeys();
  const chordSet = selectors.getChordSet(chordSetIndex)(state);
  const availableChords = selectors.getAvailableChords();

  const handleSetName = useCallback(
    (newName) => dispatch(actions.setChordSetName(chordSetIndex, newName)),
    [chordSetIndex, dispatch],
  );

  const handleSetDescription = useCallback(
    (newDescription) =>
      dispatch(actions.setChordSetDescription(chordSetIndex, newDescription)),
    [chordSetIndex, dispatch],
  );

  const handleSetKey = useCallback(
    (newKey) => dispatch(actions.setChordSetKey(chordSetIndex, newKey)),
    [chordSetIndex, dispatch],
  );

  const handleAddChord = useCallback(
    (chordToAdd) => dispatch(actions.addChordToSet(chordSetIndex, chordToAdd)),
    [chordSetIndex, dispatch],
  );

  const handleRemoveChord = useCallback(
    (chordToRemove) =>
      dispatch(actions.removeChordFromSet(chordSetIndex, chordToRemove)),
    [chordSetIndex, dispatch],
  );

  if (!chordSet) {
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
      availableChords={availableChords}
      onSetName={handleSetName}
      onSetDescription={handleSetDescription}
      onSetKey={handleSetKey}
      onAddChord={handleAddChord}
      onRemoveChord={handleRemoveChord}
    />
  );
};

export default ChordSetPageContainer;
