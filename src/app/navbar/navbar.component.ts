import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _auhser :AuthService,
    private _router :Router) { }

  ngOnInit(): void {
  }

//   signin(){
// this._auhser.loginfromapp()
//   }
  signout(){
    this._auhser.logioutfrom()
    this._router.navigate(['/'])
  }
}
