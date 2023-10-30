import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  productsOnCart = this.cartService.getProductsFromCart()

  constructor(private cartService: CartService) { }

  removeProduct(product: Product) {
    this.cartService.removeProduct(product);
  }
}
