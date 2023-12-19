import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit{

  products: { name: string, description: string, imageUrls: string[], price: number}[] = [];

  productImageUrls: string[] = [];
  productsDataLoaded: boolean = false;

  constructor(private productService: ProductService, private storageService: StorageService){
  }

  ngOnInit(): void {
    this.loadProductsAndImages();
  }

  async loadProductsAndImages() {
    this.products = await this.productService.fetchProducts();
    for (const product of this.products) {
      product.imageUrls = await this.storageService.getProductImageUrls(product);
      console.log(`In loadProductsAndImages and products is`, this.products);
      this.productsDataLoaded = true;
    }
  }


}
