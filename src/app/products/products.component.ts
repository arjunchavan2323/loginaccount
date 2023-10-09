import { Component, OnInit } from '@angular/core';
import { iproduct } from '../servicess/model';
import { ProductService } from '../servicess/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
productArray:Array<iproduct>=[]
slectedid!:number
  constructor(private _productser : ProductService) { }

  ngOnInit(): void {

    this.productArray=this._productser.getreturn()
    this.slectedid=this.productArray[0].id
  }

}
