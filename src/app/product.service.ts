import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: Firestore) { }

  async fetchProducts(): Promise<any[]>{
    const productsRef = collection(this.firestore, "products");
    const productSnapshot = await getDocs(productsRef);
    const products = productSnapshot.docs.map(doc => doc.data());
    return products;
  }
}
