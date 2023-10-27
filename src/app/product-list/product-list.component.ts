import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  addProduct(product: typeof this.products[number]) {
    this.products = [...this.products, product];
  }

  share(productId: number) {
    const product = this.products.find(p => p.id === productId);

    if (product) window.alert(`${product.name} has been shared!`);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/