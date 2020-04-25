import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'products', component: ProductListComponent
      },
      {
        path: 'products/:id',
        component:ProductDetailComponent

      }
    ])


  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ]


})
export class ProductModule { }
