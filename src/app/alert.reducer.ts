import { Action } from '@ngrx/store';
import * as AlertActions from './alert.actions';

import {Alert, DefaultAlert} from './alert.model';

export type Action = AlertActions.ALL;

const defaultState: Alert = new DefaultAlert('GOOGL', 'defaultemail@gmail.com', 0.0);

declare module '@ngrx/store' {
  interface Action {
    type: string;
    payload?: any;
  }
}

export function alertReducer(state: Alert = defaultState, action: Action) {
  console.log('alertReducer: action: ' + JSON.stringify(action) + ' state: ' + JSON.stringify(state));

  switch (action.type) {
    case AlertActions.ADD_ALERT:
      return { ...state, symbol: action.payload };

    default:
      return state;
  }
}
