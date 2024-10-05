import { Component } from '@angular/core';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
})
export class NavbarComponent {
  constructor(public cartService: CartService) {}
}
