import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { StorageService } from '../storage.service';
import { Product } from 'src/types';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less'],
})
export class ProductsComponent implements OnInit {
  allProducts: Product[] = [];

  productImageUrls: string[] = [];
  productsDataLoaded: boolean = false;

  constructor(
    private productService: ProductService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.loadProductsAndImages();
  }

  async loadProductsAndImages() {
    this.allProducts = await this.productService.fetchAllProducts();
    this.productsDataLoaded = true;
  }
}
