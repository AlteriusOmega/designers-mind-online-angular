import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem, Product } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  items$ = this.itemsSubject.asObservable();
  private items: CartItem[] = []; // Uncomment for prod!
  // private items: CartItem[] = [
  //   // Comment out for prod!
  //   {
  //     product: {
  //       id: '5TQlJgL2mNQbgxgKQMIj',
  //       description: 'blah',
  //       imageUrls: [''],
  //       name: 'test',
  //       price: 99.45,
  //     },
  //     quantity: 5,
  //   },
  // ];

  constructor() {
    this.loadCartFromStorage();
    this.refreshItems(); // Ask Kevin about this. Is it necessary?
  }

  refreshItems() {
    this.itemsSubject.next([...this.items]);
    this.saveCartToStorage();
  }

  addToCart(newProduct: Product) {
    const existingItem = this.items.find(
      (item) => item.product.id === newProduct.id
    );
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({ product: newProduct, quantity: 1 });
    }
    this.refreshItems();
  }

  removeFromCart(product: Product) {
    this.items = this.items.filter((item) => item.product.id !== product.id);
    this.refreshItems();
  }

  getAllItems() {
    return this.items.slice(); // Using slice to return a shallow copy, not a reference
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

  updateQuantity(product: Product, quantity: number) {
    // TODO make it so this just can't go below 1
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      if (quantity < 1) {
        // Don't let it set quantity less than 1. Must use removeFromCart to delete item
        existingItem.quantity = 1;
      } else {
        existingItem.quantity = quantity;
      }
      this.refreshItems();
    } else {
      console.error(
        `Error: Cannot change quantity of item with product ID ${product.id} since it is not in cart`
      );
    }
  }

  // Ex: local storage used to have data that persists through page reloads and even closing and re-opening tab
  loadCartFromStorage() {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      this.items = JSON.parse(storedCart);
    }
  }

  clearCartFromStorage() {
    this.items = [];
    localStorage.removeItem('cartItems');
  }

  saveCartToStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }
}
