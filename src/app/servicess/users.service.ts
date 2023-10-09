import { Injectable } from '@angular/core';
import { iuser } from './model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  userArray:Array<iuser>=[{
    username:"facebook",
    status:"inprogress",
    id:1,
    canReturn:1
  },
  {
    username:"youtube",
    status:"dicepatch",
    id:2,
    canReturn:0
  },
  {
    username:"snapchat",
    status:"deliver",
    id:3,
    canReturn:1
  }
]

getreturn(){
  return this.userArray
};
getsingle(id:number):iuser{
  return this.userArray.find(obj => (obj.id === id))!;
}

updateArray(user:iuser){
  this.userArray.forEach(obj=>{
    if(obj.id===user.id){
      obj.status=user.status;
      obj.username=user.username;
     
    }
  })
}
}
