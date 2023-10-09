
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";



@Injectable({
    providedIn:'root'
})


export class auth implements CanActivate, CanActivateChild{

    constructor(private _authservice :AuthService,
        private _router :Router){}
   
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  | Observable<boolean> | Promise<boolean> {
       return this._authservice.isthentical()
       .then((myres:boolean)=>{
        if(myres){
            return true
        }else{
            this._router.navigate(['/'])
            return false
        }
       })


    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  | Observable<boolean> | Promise<boolean> {
        return this.canActivate(childRoute, state )
    }
}

