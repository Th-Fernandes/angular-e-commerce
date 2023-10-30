import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  addProductToCart(product : Product) { 
    this.items.push(product); 
  };
  
  getProductsFromCart() {
    return this.items;
  }

  removeProduct(product : Product) { 
    const hasProduct = this.items.findIndex(p => p.id === product.id);
    console.log(hasProduct)
    if (hasProduct) this.items.splice(hasProduct, 1);
  }

  clearCart() {
    this.items = [];     
  }
}
