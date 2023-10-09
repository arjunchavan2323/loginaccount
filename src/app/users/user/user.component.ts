import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { iuser } from 'src/app/servicess/model';
import { UsersService } from 'src/app/servicess/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
useeeid!:number;
getobject!:iuser
  constructor(private _route :ActivatedRoute,
    private _users :UsersService,
    private _router :Router) { }

  ngOnInit(): void {
    this._route.params
    .subscribe((myparams:Params)=>{
     this.useeeid=+myparams['usersid']
     this.getobject=this._users.getsingle(this.useeeid)

    })
  }
  gotoedit(){
this._router.navigate(['edits'],{relativeTo:this._route, queryParamsHandling:'preserve'})
  }
}
