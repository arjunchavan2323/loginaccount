import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { iproduct } from 'src/app/servicess/model';
import { ProductService } from 'src/app/servicess/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
selectproud!:number;
productobect!:iproduct
  constructor(private _route :ActivatedRoute,
    private _router :Router,
    private _productser :ProductService) { }

  ngOnInit(): void {
    this._route.params
    .subscribe((myparam:Params)=>{
      this.selectproud=+myparam['productid']
      this.productobect=this._productser.getsingle(this.selectproud)
    })
  }
  gotiuplzml(){
    this._router.navigate(['edit'],{relativeTo:this._route,queryParamsHandling:'preserve'})
  }
}
