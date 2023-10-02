import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit{

  products: any[] = [];

  constructor(private productService: ProductService, private storageService: StorageService){
    productService.fetchProducts()
      .then(products => {
        console.log(`Products is`, products);
      });
    // const image1Ref = this.storageService.getImage1();
  }
  ngOnInit(): void {
    this.loadProducts();
  }
  async loadProducts(): Promise<void>{
    this.products = await this.productService.fetchProducts();
  }
}
