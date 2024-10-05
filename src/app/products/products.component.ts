import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/types';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less'],
})
export class ProductsComponent implements OnInit {
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];

  productImageUrls: string[] = [];
  productsDataLoaded: boolean = false;

  constructor(
    private productService: ProductService,
    private seacrhService: SearchService
  ) {}

  ngOnInit(): void {
    this.loadProductsAndImages();
    this.seacrhService.searchTerm$.subscribe((term) => {
      this.filterProducts(term);
    });
  }

  async loadProductsAndImages() {
    this.allProducts = await this.productService.fetchAllProducts();
    this.productsDataLoaded = true;
    this.filteredProducts = [...this.allProducts]; // Set filtered products to all at first
  }

  filterProducts(term: string) {
    const lowerTerm = term.toLowerCase();
    this.filteredProducts = this.allProducts.filter((product) => {
      return (
        product.name.toLowerCase().includes(lowerTerm) ||
        product.description.toLowerCase().includes(lowerTerm) ||
        product.price.toString().includes(lowerTerm)
      );
    });
  }
}
