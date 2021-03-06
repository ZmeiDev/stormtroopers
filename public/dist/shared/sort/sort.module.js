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
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var sort_component_1 = require('./sort.component');
var SortModule = (function () {
    function SortModule() {
    }
    SortModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, common_1.CommonModule],
            exports: [sort_component_1.SortComponent],
            declarations: [sort_component_1.SortComponent],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], SortModule);
    return SortModule;
}());
exports.SortModule = SortModule;
//# sourceMappingURL=sort.module.js.map