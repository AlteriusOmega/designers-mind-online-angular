import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit{

  // products: any[] = [];
  products: { name: string, description: string, imageUrls: string[] }[] = [];

  productImageUrls: string[] = [];
  productsDataLoaded: boolean = false;

  constructor(private productService: ProductService, private storageService: StorageService){
  }

  ngOnInit(): void {
    // this.loadProducts();
    this.loadProductsAndImages();
  }
  // async loadProducts(): Promise<void>{
  //   this.products = await this.productService.fetchProducts();
  //   // console.log(`In loadProducts and this.products is `, this.products);
  //   this.productImageUrls = await this.storageService.getProductImageUrls(this.products[0]);
  //   // console.log(`In loadProducts and this.productImageUrls is `, this.productImageUrls); // Not working yet
  // }

  async loadProductsAndImages() {
    this.products = await this.productService.fetchProducts();
    for (const product of this.products) {
      product.imageUrls = await this.storageService.getProductImageUrls(product);
      console.log(`In loadProductsAndImages and products is`, this.products);
      this.productsDataLoaded = true;

    }
  }


}
