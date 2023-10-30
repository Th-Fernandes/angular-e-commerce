import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {
  shippingCosts: 
    Observable<{ type: string, price: number }[]> = 
    this.cartService.getShippingPrices();

  constructor( private cartService: CartService) { }

  // ngOnInit(): void {
  //   this.shippingCosts = ;
  // }
}
