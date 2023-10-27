import { Component } from '@angular/core';
import { OnInit } from "@angular/core";
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProductByParam();
  }

  private getProductByParam() {
    const routeParam = this.route.snapshot.paramMap;  
    const productId = Number(routeParam.get('productId'));  
    
    this.product = products.find(p => p.id === productId);
  }
}
