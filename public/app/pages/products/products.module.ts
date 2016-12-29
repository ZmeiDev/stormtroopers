import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProductsRoutingModule, routedComponents } from './products-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component'
import{CustomSortPipe} from '../../pipes/sort.pipe'
import{CustomFilterPipe} from '../../pipes/filter.pipe'



@NgModule({
  imports: [SharedModule,ProductsRoutingModule],
  declarations: [
    routedComponents,
    ProductDetailsComponent,
    CustomSortPipe,
    CustomFilterPipe],
  providers: []
})
export class ProductsModule { }
