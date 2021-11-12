import * as selectors from '../../Store/selectors';
import type { PageProps } from '../Types';
import ChordSetsPage from './Components/ChordSetsPage';

const ChordSetsPageContainer = ({ state }: PageProps) => {
  const chordSets = selectors.getChordSets(state);

  return <ChordSetsPage chordSets={chordSets} />;
};

export default ChordSetsPageContainer;
