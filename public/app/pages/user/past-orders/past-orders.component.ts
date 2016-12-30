import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { UserService } from '../../../services/user/user.service';
import { User } from '../../../models/user.model';
import { Product } from '../../../models/product.model';

@Component({
    moduleId: module.id,
    templateUrl: './past-orders.component.html',
    styleUrls: ['./past-orders.component.css']
})

export class PastOrdersComponent implements OnInit {
    pastOrders: Product[];

    constructor(private _userService: UserService) {
    }

    ngOnInit() {
        this._userService.getPastOrders()
        .subscribe((products: Product[]) => this.pastOrders = products);
    }
}