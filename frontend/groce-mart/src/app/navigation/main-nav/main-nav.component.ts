import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import * as fromUserState from '../../pages/account/store/reducers/user.reducer'
import * as UserActions from '../../pages/account/store/actions/user.actions'
import { Store } from '@ngrx/store'
import { AuthService } from 'src/app/pages/account/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
  showSearch:boolean=false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store$:Store<fromUserState.AppState>,
    public authService:AuthService,
    private router:Router
  ) {}
  search:string;
  onSearchSubmit(){
    console.log(this.search)
    this.showSearch=false;
  }
  onLogout(){
    this.router.navigate(['/account'])
    this.store$.dispatch(UserActions.logoutUser())
  }
}
