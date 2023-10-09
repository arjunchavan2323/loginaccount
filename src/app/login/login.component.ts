import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
ishaveinshow:boolean=true
  constructor(private _authser :AuthService,
    private _router :Router) { }

  ngOnInit(): void {
  }
  onlogin(Username:HTMLInputElement, password:HTMLInputElement){
      this._authser.loginfromapp(Username.value, password.value)

      
    }
     
  
  }