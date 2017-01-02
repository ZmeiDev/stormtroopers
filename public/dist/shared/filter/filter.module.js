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
var filter_component_1 = require('./filter.component');
var FilterModule = (function () {
    function FilterModule() {
    }
    FilterModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule],
            exports: [filter_component_1.FilterComponent],
            declarations: [filter_component_1.FilterComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], FilterModule);
    return FilterModule;
}());
exports.FilterModule = FilterModule;
//# sourceMappingURL=filter.module.js.map