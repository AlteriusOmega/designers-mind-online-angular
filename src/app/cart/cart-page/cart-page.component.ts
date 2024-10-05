import { Component } from '@angular/core';
import { CartItem, Product } from 'src/types';
import { CartService } from '../../shared/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.less'],
})
export class CartPageComponent {
  items: CartItem[] = [];
  total: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = this.cartService.getAllItems();
    this.total = this.cartService.getTotal();
  }
}
