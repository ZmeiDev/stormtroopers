import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FilterModule } from '../../shared/filter/filter.module';
import { SortModule } from '../../shared/sort/sort.module';
import { ProductOverviewModule } from '../../shared/product-overview/product-overview.module';
import { PipeModule } from '../../pipes/pipe.module';

import { ProductsRoutingModule, routedComponents } from './products-routing.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ProductsRoutingModule,
    FilterModule,
    SortModule,
    ProductOverviewModule,
    PipeModule,
  ],
  declarations: [
    routedComponents,
  ],
  providers: []
})
export class ProductsModule { }
