import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import sampleReducer from './sample';

const rootReducer = combineReducers({
  sample: sampleReducer,
});

export default rootReducer;

export type RootState = StateType<typeof rootReducer>;
