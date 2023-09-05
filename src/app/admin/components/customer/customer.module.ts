import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: CustomerComponent}
    ])
  ]
})
export class CustomerModule { }

/* forChild: özel bir modül için rotaları tanımlamanıza yardımcı olan bir yöntemdir.
   forRoot:  ana rotalarını ve rotaların nasıl çalışacağını tanımlamak için kullanılan bir yöntemdir.
   uygulamanızın hangi sayfalarının hangi URL'lere eşleştiğini kontrol eder.
*/