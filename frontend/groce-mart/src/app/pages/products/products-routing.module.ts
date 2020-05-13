import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ToiletriesComponent } from './toiletries/toiletries.component';
import { PackedFoodsComponent } from './packed-foods/packed-foods.component';
import { FreshMartComponent } from './fresh-mart/fresh-mart.component';


const routes: Routes = [
  {path:'',component:ProductsComponent},
  {path:'toileteries',component:ToiletriesComponent},
  {path:'packed-foods',component:PackedFoodsComponent},
  {path:'fresh-mart',component:FreshMartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
