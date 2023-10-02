import { Component } from '@angular/core';
import { Firestore, getFirestore, doc, docData } from '@angular/fire/firestore';
import { collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';
// import { traceUntilFirst } from '@angular/fire/performance';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent {

  // public readonly docValue$: Observable<any>;

  // constructor(firestore: Firestore){
  //   const productsRef = collection(firestore, 'products');
  //   const ref = doc(firestore, 'products/Npx6QHWVBRiH2AesZvqi ');
  //   this.docValue$ = docData(ref)
  //   console.log(`docValue$ is `, this.docValue$);
  // }


  constructor(private productService: ProductService){
    productService.fetchProducts()
    .then(products => {
      console.log(`Products is`, products);
    })

  }



}
