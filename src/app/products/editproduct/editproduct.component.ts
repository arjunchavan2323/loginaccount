import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { iproduct, pstatus } from 'src/app/servicess/model';
import { ProductService } from 'src/app/servicess/product.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {
// produce!:number;
// productobect!:iproduct;
// canedit:number=1;

productiid!:number
productobect!:iproduct
canedit:number=1
  constructor(private _route :ActivatedRoute,
    private _router :Router,
    private _productser :ProductService) { }

  ngOnInit(): void {

this.productiid=+this._route.snapshot.params['productid']
this.productobect=this._productser.getsingle(this.productiid)
  this._route.queryParams
  .subscribe((queryparams:Params)=>{
    this.canedit=+queryparams['canedit']
  })



  }



gotoproduct(pname:HTMLInputElement, status:HTMLSelectElement){
  let obj:iproduct={
    pname:pname.value,
    status:status.value as pstatus,
    id:this.productiid,
    canReturn:this.canedit
  }
 this._productser.getproductupdate(obj) 
 this._router.navigate(['/products', this.productiid])
}
}
