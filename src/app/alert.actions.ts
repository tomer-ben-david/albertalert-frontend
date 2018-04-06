import { Action } from '@ngrx/store';
import {Alert} from './alert.model';

export const ADD_ALERT = '[Post] Add Alert';
export const ADD_ALERT_SUCCESS = '[Post] Add Alert Success';
export const ADD_ALERT_FAIL = '[Post] Add Alert Fail';
export const REMOVE_ALERT = '[Remove] Remove Alert';

export class AddAlert implements Action {
  readonly type = ADD_ALERT;

  constructor(public payload: Alert) {} // can be any object payload now string.
}

export class AddAlertSuccess implements Action {
  readonly type = ADD_ALERT_SUCCESS;

  constructor() {}
}

export class AddAlertFail implements Action {
  readonly type = ADD_ALERT_FAIL;

  constructor(public payload: any) {}
}

export class RemoveAlert implements Action {
  readonly type = REMOVE_ALERT;

  constructor(public payload: string) {} // can be any object payload now string.
}


export type ALL = AddAlert | AddAlertSuccess | AddAlertFail | RemoveAlert;
