import { Action } from '@ngrx/store';

export const ADD_ALERT = '[Post] Add Alert';
export const REMOVE_ALERT = '[Remove] Remove Alert';

export class AddAlert implements Action {
  readonly type = ADD_ALERT;

  constructor(public payload: string) {} // can be any object payload now string.
}

export class RemoveAlert implements Action {
  readonly type = REMOVE_ALERT;

  constructor(public payload: string) {} // can be any object payload now string.
}


export type ALL = AddAlert | RemoveAlert;
