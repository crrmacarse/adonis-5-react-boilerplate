import { ActionType } from 'typesafe-actions';
import * as sampleActions from './sample/actions';

const actions = {
  sample: sampleActions,
};

export default actions;

export type RootAction = ActionType<typeof actions>;
