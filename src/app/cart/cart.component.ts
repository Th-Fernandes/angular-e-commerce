import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  productsOnCart = this.cartService.getProductsFromCart();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder 
  ) { }

  removeProduct(product: Product) {
    this.cartService.removeProduct(product);
  }

  clearCart() {
    this.cartService.clearCart();
    this.productsOnCart = this.cartService.getProductsFromCart();
  }

  onSubmit() {
    this.clearCart();
    console.warn(`Your order has been submitted`, this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
