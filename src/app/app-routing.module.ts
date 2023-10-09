import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './users/user/user.component';
import { EdituserComponent } from './users/edituser/edituser.component';
import { ProductComponent } from './products/product/product.component';
import { EditproductComponent } from './products/editproduct/editproduct.component';
import { auth } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'', component:LoginComponent
  },
  {
    path:'home', component:DashbordComponent
  },
  {
    path:'users', component:UsersComponent,
    canActivateChild:[auth],
    title:'users',
    children:[{
      path:':usersid', component:UserComponent
    },
    {
      path:':usersid/edits', component:EdituserComponent
    }
  ]
  },
  // {
  // path:'users/:usersid', component:UserComponent
  // },
  // {
  //   path:'users/:usersid/edits', component:EdituserComponent
  // },
  {
    path:'products', component:ProductsComponent,
    canActivateChild:[auth],
    title:'products',
    children:[
      {
        path:':productid', component:ProductComponent
      },
      {
        path:':productid/edit', component:EditproductComponent
      }
    ]
   
  },
  // {
  //   path:'products/:productid', component:ProductComponent
  // },
  // {
  //   path:'products/:productid/edit', component:EditproductComponent
  // }
  {
    path:'page-not-found', component:PageNotFoundComponent,
    data:{
      msg:'page not found'
    }
  },
  {
    path:'**', redirectTo:'page-not-found'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
