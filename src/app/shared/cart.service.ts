import { Injectable } from '@angular/core';
import { Product } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  removeFromCart(product: Product) {
    this.items = this.items.filter((item) => item.id !== product.id);
  }

  getItems() {
    return this.items;
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  getCount() {
    return this.items.length;
  }

  constructor() {}
}
