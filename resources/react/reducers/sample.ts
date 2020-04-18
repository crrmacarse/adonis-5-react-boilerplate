import { createReducer } from 'typesafe-actions';
import { DeepReadonly } from 'utility-types';
import * as TYPES from 'actions/sample/types';

export type SampleProps = DeepReadonly<{
  value: number;
}>;

const INITIAL_STATE: SampleProps = {
  value: 0,
};

export default createReducer(INITIAL_STATE)
  .handleType(TYPES.INCREMENT_VALUE,
    (state) => ({ ...state, value: state.value + 1 }))
  .handleType(TYPES.DECREMENT_VALUE,
    (state) => ({ ...state, value: state.value - 1 }));
