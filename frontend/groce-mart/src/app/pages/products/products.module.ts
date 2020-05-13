import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { FreshMartComponent } from './fresh-mart/fresh-mart.component';
import { ToiletriesComponent } from './toiletries/toiletries.component';
import { PackedFoodsComponent } from './packed-foods/packed-foods.component';


@NgModule({
  declarations: [FreshMartComponent, ToiletriesComponent, PackedFoodsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
