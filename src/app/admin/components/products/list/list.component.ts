import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { List_Product } from 'src/app/contracts/list_product';
import {MatPaginator} from '@angular/material/paginator';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductService } from 'src/app/services/common/models/product.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService,
    private productService: ProductService,
    private alertifyService: AlertifyService){
      super(spinner)
    }
displayedColumns: string[] = ['name', 'stock', 'price', 'createdDate' , 'updatedDate'];
dataSource: MatTableDataSource<List_Product> = null;

@ViewChild(MatPaginator) paginator: MatPaginator;

async ngOnInit() {
  this.showSpinner(SpinnerType.BallAtom);
  const allProducts:  List_Product[]  = await this.productService.read(() => this.hideSpinner(SpinnerType.BallAtom),
   errorMessage => this.alertifyService.message(errorMessage, {
    dismissOthers: true,
    messageType: MessageType.Error,
    position: Position.TopRight
  }))

  this.dataSource = new MatTableDataSource<List_Product>(allProducts);

}
}
//addProductImages(id: string) {
//  this.dialogService.openDialog({
//    componentType: SelectProductImageDialogComponent,
//    data: id,
//    options: {
//      width: "1400px"
//    }
//  });
//}

//async pageChanged() {
//  await this.getProducts();
//}
//
//async ngOnInit() {
//  await this.getProducts();
//}

//showQRCode(productId: string) {
//  this.dialogService.openDialog({
//    componentType: QrcodeDialogComponent,
//    data: productId,
//    afterClosed: () => { }
//  })
//}
//




