import type { Dispatch } from 'react';
import * as actions from '../../Store/actions';
import type { State } from '../../Store/Types/State';

export interface PageProps {
  state: State;
  dispatch: Dispatch<actions.Action>;
}
