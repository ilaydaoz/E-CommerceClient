import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';  
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
 {
   path: "admin", component: LayoutComponent, children: [
    { path: "", component: DashboardComponent },
    { path: "customers", loadChildren: () => import("./admin/components/customer/customer.module").then(module => module.CustomerModule)},
    { path: "products", loadChildren: () => import("./admin/components/products/products.module").then(module => module.ProductsModule)},
    { path: "orders", loadChildren: () => import("./admin/components/order/order.module").then(module => module.OrderModule)},
   ]
 },
 { path: "", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/* --lazy loading--
loadChildren:uygulamanızın başlangıcında tüm modülleri 
yüklemek yerine, sadece ihtiyaç duyulan modüllerin ihtiyaç duyulduğu zaman yüklenmesini sağlar.
 Bu, uygulamanızın başlatılma süresini azaltabilir 
ve daha hızlı yükleme süreleri sunabilir. */