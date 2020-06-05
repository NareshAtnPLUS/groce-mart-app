import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import * as fromUser from '../store/selectors/user.selectors'
import { AccountService } from '../services/account.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private auth:AuthService,
    private accountService:AccountService,
    private store$:Store<any>
  ) {
    this.accountService.getRandom().subscribe((data:{})=>{
      console.log(data)
    })
  }
    profile;
  async ngOnInit() {
    if(await this.auth.isLoggedIn() == true){
      console.log('token is loaded')
    }
    this.profile = this.store$.select(fromUser.selectJWTToken)
  }

}
