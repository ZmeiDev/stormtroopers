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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var ng2_bootstrap_2 = require('ng2-bootstrap/ng2-bootstrap');
var nav_component_1 = require('./navbar/nav.component');
var footer_component_1 = require('./footer/footer.component');
var toast_component_1 = require('./toast/toast.component');
var color_directive_1 = require('../directives/color.directive');
var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                ng2_bootstrap_1.Ng2BootstrapModule,
                ng2_bootstrap_2.DropdownModule.forRoot()
            ],
            exports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                nav_component_1.NavComponent,
                footer_component_1.FooterComponent,
                toast_component_1.ToastComponent
            ],
            declarations: [
                nav_component_1.NavComponent,
                footer_component_1.FooterComponent,
                toast_component_1.ToastComponent,
                color_directive_1.ColorDirective
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;

//# sourceMappingURL=core.module.js.map
