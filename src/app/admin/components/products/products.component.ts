import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.Pacman);

// this.httpClientService.get<Create_Product[]>({
//   controller: "products"
// }).subscribe(data => console.log(data));
//
    // this.httpClientService.post({
    //   controller:"products"
    // },{
    //    name:"kalem",
    //    stock:"1000",
    //    price:2.50,
    // }).subscribe();

    // this.httpClientService.put({
    //   controller: "products",
    // }, {
    //   id: "e956fc75-5b97-494f-8ede-2ecf932eed6a",
    //   name: "renkli kağıt",
    //   stock: 1500,
    //   price: 5.5
    // }).subscribe();

   //this.httpClientService.delete({
   //  controller: "products",
   //}, "7d9cd1cb-cb36-4ab0-9463-ee17cd130f50").subscribe();
  }
}
