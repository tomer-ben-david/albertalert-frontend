import { Injectable } from '@angular/core';

import * as alertActions from './alert.actions';
import {Actions, Effect} from '@ngrx/effects';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

export const DB_ALERTS_PATH = 'alerts/';

export type Action = alertActions.ALL;

@Injectable()
export class AlertEffects {
  constructor(private actions: Actions, private db: AngularFirestore) {}

  @Effect() addAlert(): Observable<Action> {
    return this.actions.ofType(alertActions.ADD_ALERT)
      .map((action: alertActions.AddAlert) => {
        console.log('ActionToAdd: ' + JSON.stringify(action.payload));
        return action.payload;
      })
      .mergeMap(payload => {
        return of(this.db.collection(DB_ALERTS_PATH).add(payload.getData()));
      }
      )
      .map(() => new alertActions.AddAlertSuccess())
      .catch(err => of(new alertActions.AddAlertFail({error: err})));
  }
}
