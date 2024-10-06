import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartItem, Product } from 'src/types';
import { CartService } from '../../shared/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.less'],
})
export class CartPageComponent implements OnInit, OnDestroy {
  items: CartItem[] = [];
  total: number = 0;
  private itemSubscription!: Subscription;
  // Ex: constructor
  constructor(public cartService: CartService) {
    // Ex: rxjs observable with callback function
    this.itemSubscription = this.cartService.items$.subscribe((newItems) => {
      this.items = newItems;
      this.total = this.cartService.getTotal();
    });
  }

  // Ex: ngOnInit lifecycle hook
  ngOnInit() {
    this.items = this.cartService.getAllItems();
    this.total = this.cartService.getTotal();
  }

  removeItem(product: Product) {
    this.cartService.removeFromCart(product);
  }

  ngOnDestroy(): void {
    this.itemSubscription.unsubscribe();
  }
}
