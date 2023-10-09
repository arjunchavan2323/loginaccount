import { Component, OnInit } from '@angular/core';
import { iuser } from '../servicess/model';
import { UsersService } from '../servicess/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
userArray:Array<iuser>=[]
selectedid!:number
  constructor(private _userser : UsersService) { }

  ngOnInit(): void {
    this.userArray=this._userser.getreturn()
    this.selectedid=this.userArray[0].id
  }

}
