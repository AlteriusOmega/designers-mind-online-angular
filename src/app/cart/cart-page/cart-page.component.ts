import { Component } from '@angular/core';
import { Product } from 'src/types';
import { CartService } from '../../shared/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.less'],
})
export class CartPageComponent {
  items: Product[] = [];
  total: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }
}
