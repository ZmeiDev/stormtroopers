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
var user_service_1 = require('../../../services/user/user.service');
var toast_service_1 = require('../../../services/shared/toast.service');
var PastOrdersComponent = (function () {
    function PastOrdersComponent(_userService, _toastService) {
        this._userService = _userService;
        this._toastService = _toastService;
    }
    PastOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getPastOrders()
            .subscribe(function (products) { return _this.pastOrders = products; }, function (err) { return _this._toastService.activate(err, false); });
    };
    PastOrdersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './past-orders.component.html',
            styleUrls: ['./past-orders.component.css']
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, toast_service_1.ToastService])
    ], PastOrdersComponent);
    return PastOrdersComponent;
}());
exports.PastOrdersComponent = PastOrdersComponent;
//# sourceMappingURL=past-orders.component.js.map