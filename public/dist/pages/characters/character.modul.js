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
var character_component_1 = require('./character.component');
var pipe_module_1 = require('../../pipes/pipe.module');
var filter_module_1 = require('../../shared/filter/filter.module');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var CharacterModule = (function () {
    function CharacterModule() {
    }
    CharacterModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, pipe_module_1.PipeModule, filter_module_1.FilterModule, ng2_bootstrap_1.PaginationModule.forRoot()],
            declarations: [character_component_1.CharacterComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], CharacterModule);
    return CharacterModule;
}());
exports.CharacterModule = CharacterModule;
//# sourceMappingURL=character.modul.js.map