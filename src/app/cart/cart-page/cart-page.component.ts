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
  // Ex: constructor
  constructor(public cartService: CartService) {
    // Ex: rxjs observable with callback function
    this.cartService.items$.subscribe((newItems) => {
      // Inside here is the callback function that gets called whenever the observable items$ emits a new value
      // So, every time items$ observable emits a new items array, we set the local items array this.items to that new one
      this.items = newItems;
      this.total = this.cartService.getTotal();
    });
  }

  ngOnInit() {
    this.items = this.cartService.getAllItems();
    this.total = this.cartService.getTotal();
  }

  removeItem(product: Product) {
    this.cartService.removeFromCart(product);
  }
}
