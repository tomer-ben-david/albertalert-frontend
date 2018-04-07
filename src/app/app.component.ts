import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Alert, DefaultAlert } from './alert.model';
import * as AlertActions from './alert.actions';
import {ADD_ALERT, AddAlert} from './alert.actions';

interface AppState {
  alert: Alert;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  alert: Observable<Alert>;

  constructor(private store: Store<AppState>) {
    console.log('COMPONENT State: ' + this.store.select('alert'));
    this.alert = this.store.select('alert');
  }

  addAlert(symbol: string, email: string, price: number) {
    console.log('addAlert: ' + symbol);
    this.store.dispatch(new AddAlert(new DefaultAlert(symbol, email, price)));
  }
}
