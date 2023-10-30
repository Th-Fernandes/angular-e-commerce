import { Component } from '@angular/core';
import { OnInit } from "@angular/core";
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getProductByParam();
  }

  private getProductByParam() {
    const routeParam = this.route.snapshot.paramMap;  
    const productId = Number(routeParam.get('productId'));  
    
    this.product = products.find(p => p.id === productId);
  }

  addProductToCart(product: Product) {
    this.cartService.addProductToCart(product);
    window.alert('product has been put on cart')
  }
}
