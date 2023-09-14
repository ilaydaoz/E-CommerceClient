import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Product } from 'src/app/contracts/create_product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientServices : HttpClientService) { }

  create(product: Create_Product,successCallBack?:any){
   this.httpClientServices.post({
    controller: "products",
   
   },product).subscribe(result =>{
    successCallBack();
    alert("başarılı");
   });
  }
}
