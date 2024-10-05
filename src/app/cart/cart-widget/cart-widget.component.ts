import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';
import { Product } from 'src/types';

@Component({
  selector: 'app-cart-widget',
  templateUrl: './cart-widget.component.html',
  styleUrls: ['./cart-widget.component.less'],
})
export class CartWidgetComponent {
  items: Product[] = [];
  total: number = 0;
  constructor(public cartService: CartService) {}
}
