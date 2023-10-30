import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient ) { }

  addProductToCart(product : Product) { 
    this.items.push(product); 
  };
  
  getProductsFromCart() {
    return this.items;
  }

  removeProduct(product : Product) { 
    const productIndex = this.items.findIndex(p => p.id === product.id);
    if (productIndex >= 0) this.items.splice(productIndex, 1);
  }

  clearCart() {
    this.items = [];     
  }

  getShippingPrices() {
    return this.http
      .get<{type: string, price: number}[]>
      ('/assets/shipping.json')
  }
}
