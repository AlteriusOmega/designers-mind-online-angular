import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less'],
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  async loadProduct(id: string) {
    this.product = await this.productService.fetchProductById(id);
    console.log('In loadProduct and this.product is \n', this.product);
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    console.log(`In ngOnInit and productId is ${productId}\n`);

    if (productId) {
      this.loadProduct(productId);
    }
  }
}
