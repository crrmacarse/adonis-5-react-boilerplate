import { StateType, ActionType } from 'typesafe-actions';

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';
declare module '*.pdf';


declare module 'MyTypes' {
  export type Store = StateType<typeof import('./providers/store').default>;
  export type RootAction = ActionType<typeof import('./actions').default>;
  export type RootState = StateType<ReturnType<typeof import('./reducers').default>>;
}

declare module 'typesafe-actions' {
  interface Types {
    RootAction: ActionType<typeof import('./actions').default>;
  }
}
