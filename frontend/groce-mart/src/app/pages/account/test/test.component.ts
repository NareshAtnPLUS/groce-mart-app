import { Component, OnInit } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { Observable } from 'rxjs'
import * as accountActions from '../state/actions/account.action'
import * as fromAccounts from '../state/reducers/account.reducer'
import { Account } from '../state/models/account.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(
    private store:Store<fromAccounts.AppState>
  ) { }
  accounts$:Observable<Account[]>
  ngOnInit(): void {
    this.store.dispatch(new accountActions.LoadAccounts())
    this.accounts$ = this.store.pipe(select(fromAccounts.getAccounts))

  }

}
