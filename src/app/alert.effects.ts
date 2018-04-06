import { Injectable } from '@angular/core';

import * as alertActions from './alert.actions';
import {Actions, Effect} from '@ngrx/effects';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

export type Action = alertActions.ALL;

@Injectable()
export class AlertEffects {
  constructor(private actions: Actions, private db: AngularFirestore) {}

  @Effect() addAlert: Observable<Action> = this.actions.ofType(alertActions.ADD_ALERT)
    .map((action: alertActions.AddAlert) => action.payload )
    .mergeMap(payload => of(this.db.collection('alerts/' )
      .add( { alerts: payload
      })))
    .map(() => new alertActions.AddAlertSuccess())
    .catch(err => of (new alertActions.AddAlertFail( { error: err} )));
}
