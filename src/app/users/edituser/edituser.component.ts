import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { iuser, ustatus } from 'src/app/servicess/model';
import { UsersService } from 'src/app/servicess/users.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {
useeeid!:number;
userobect!:iuser;
canedit:number=1;
  constructor(private _route :ActivatedRoute,
    private _router:Router,
    private _userser :UsersService) { }

  ngOnInit(): void {

      this.useeeid=+this._route.snapshot.params['usersid']
    this.userobect=this._userser.getsingle(this.useeeid)

    // this._route.params
    // .subscribe((myparams:Params)=>{
    //   this.useeeid=+myparams['usersid']
    //   this.userobect=this._userser.getsingle(this.useeeid)
    // })

  
    this._route.queryParams
    .subscribe((myqueryparams:Params)=>{
      console.log(myqueryparams)
      this.canedit=+myqueryparams['canedit']
     
    })
  }

  onupdat(pname:HTMLInputElement, lname:HTMLSelectElement){
   let obj:iuser={
    username:pname.value,
    status:lname.value as ustatus,
    id:this.useeeid,
    canReturn:this.canedit

   }
   this._userser.updateArray(obj)
   this._router.navigate(['/users', this.useeeid])
  }

}
