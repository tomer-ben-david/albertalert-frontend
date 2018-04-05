import { Action } from '@ngrx/store';
import * as AlertActions from './alert.actions';

import { Alert } from './alert.model';

export type Action = AlertActions.ALL;

const defaultState: Alert = {
  symbol: 'GOOGL', email: 'tomerbd1@gmail.com'
};

const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

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
      console.log('AlertActions.ADD_ALERT');
      const theNewState = newState(state, { symbol: action.payload });
      console.log('theNewState: ' + JSON.stringify(theNewState));
      return theNewState;

    default:
      return state;
  }
}
