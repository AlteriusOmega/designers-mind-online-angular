import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';
import { Product } from 'src/types';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.less'],
})
export class AddToCartComponent {
  @Input() childProduct!: Product;
  constructor(private cartService: CartService) {}
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
