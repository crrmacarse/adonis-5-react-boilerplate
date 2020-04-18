import { action } from 'typesafe-actions';
import * as TYPES from './types';

export const incrementValue = () => action(TYPES.INCREMENT_VALUE);

export const decrementValue = () => action(TYPES.DECREMENT_VALUE);
