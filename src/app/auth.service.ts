import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router :Router) { }

  isloginstaatus:boolean=false


isthentical():Promise <boolean>{
  return new Promise((resolve, reject) => {
   if(localStorage.getItem('token')){
    this.isloginstaatus=true
   }else{
    this.isloginstaatus=false
    this._router.navigate(['/'])
   }
    

    resolve(this.isloginstaatus)
  })

}



getstatus(){
  return this.isloginstaatus
}


loginfromapp(username:string, pass:string){
  if(username==="kunal" &&pass=="qaz"){
    this.isloginstaatus=true
    this._router.navigate(['/home'])
    localStorage.setItem("token", "JWT token")
    localStorage.setItem("userRoll", "A")

  }else{
    this._router.navigate(['/'])
  }
  }
  

 
logioutfrom(){
  this.isloginstaatus=false
  this._router.navigate(['/'])
  localStorage.removeItem('token')
  localStorage.removeItem('userRoll')

  
  
}

  
  }


  
  







