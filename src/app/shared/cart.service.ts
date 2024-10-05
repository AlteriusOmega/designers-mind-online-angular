import { Injectable } from '@angular/core';
import { CartItem, Product } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: CartItem[] = [];

  addToCart(newProduct: Product) {
    const existingItem = this.items.find(
      (item) => item.product.id === newProduct.id
    );
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({ product: newProduct, quantity: 1 });
    }
  }

  removeFromCart(product: Product) {
    this.items = this.items.filter((item) => item.product.id !== product.id);
  }

  reduceQuantity(product: Product) {
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        this.removeFromCart(product);
      }
    } else {
      console.error(
        `Error: Cannot reduce quantity, product of ID ${product.id} not found in cart`
      );
    }
  }

  getAllItems() {
    return this.items;
  }

  getTotal() {
    return this.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }

  getCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  constructor() {}
}
