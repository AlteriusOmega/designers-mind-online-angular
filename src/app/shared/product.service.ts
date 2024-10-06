import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  getDoc,
  getDocs,
} from '@angular/fire/firestore';
import { StorageService } from './storage.service';
import { Product } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private firestore: Firestore,
    private storageService: StorageService
  ) {}

  async fetchAllProducts(): Promise<Product[]> {
    const productsRef = collection(this.firestore, 'products');
    const productSnapshot = await getDocs(productsRef);
    const products: Product[] = [];
    for (const doc of productSnapshot.docs) {
      const productData = {
        id: doc.id,
        ...doc.data(),
      } as Product;

      // Assume the images folder exists and fetch image URLs
      productData.imageUrls = await this.storageService.getProductImageUrls(
        productData
      );
      products.push(productData);
    }

    return products;
  }

  async fetchProductById(id: string): Promise<Product | null> {
    const productRef = doc(this.firestore, 'products', id);
    const productSnapshot = await getDoc(productRef);
    console.log('In getProductById and productSnapshot is \n', productSnapshot);

    if (productSnapshot.exists()) {
      // .exists() method is from Firestore DocumentSnapshot class
      const productData = productSnapshot.data() as Product;

      // Assume image folder exists and fetch image URLs
      productData.imageUrls = await this.storageService.getProductImageUrls(
        productData
      );
      return productData;
    } else {
      console.error(`Error: No product found with id ${id}`);
      return null;
    }
  }
}
