import { Injectable } from '@angular/core';
import { iproduct } from './model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  productArray:Array<iproduct>=[{
    
      pname:"hp laptop",
      status:"inprogress",
      id:1,
      canReturn:0
    
  },
  {
    
      pname:"Dell laptop",
      status:"dicepatch",
      id:2,
      canReturn:1
    
  },
  {
    pname:"Mac Book",
    status:"deliver",
    id:3,
    canReturn:0
  },
  {
    pname:"Nokia laptop",
    status:"deliver",
    id:4,
    canReturn:1
  }
];
getreturn(){
  return this.productArray
}

getsingle(id:number):iproduct{
  return this.productArray.find(obj => (obj.id === id))!;
}

getproductupdate(proud:iproduct){
  this.productArray.forEach(pass=>{
    if(pass.id===proud.id){
      pass.pname=proud.pname;
      pass.status=proud.status
    }
  })
}
}
