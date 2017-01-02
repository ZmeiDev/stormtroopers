"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var product_overview_component_1 = require('./product-overview.component');
var product_details_modal_component_1 = require('../product-details/product-details-modal.component');
var ProductOverviewModule = (function () {
    function ProductOverviewModule() {
    }
    ProductOverviewModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule, common_1.CommonModule, ng2_bootstrap_1.ModalModule.forRoot()],
            exports: [product_overview_component_1.ProductOverviewComponent],
            declarations: [product_overview_component_1.ProductOverviewComponent, product_details_modal_component_1.ProductDetailsModalComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductOverviewModule);
    return ProductOverviewModule;
}());
exports.ProductOverviewModule = ProductOverviewModule;
//# sourceMappingURL=product-overview.module.js.map