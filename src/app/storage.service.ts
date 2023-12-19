import { Injectable } from '@angular/core';
import { Storage, StorageReference, getStorage, ref, getDownloadURL, listAll } from '@angular/fire/storage';
import { DocumentData } from 'rxfire/firestore/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  storageRef: StorageReference;

  constructor(private storage: Storage) {
    this.storage = getStorage();
    this.storageRef = ref(this.storage);
  }

  async getProductImageUrls(productDocument: DocumentData): Promise<string[]> {
    const imageFolderPath = `images/${productDocument["image-folder"]}`;
    const folderRef = ref(this.storage, imageFolderPath);
    let listResult = await listAll(folderRef);
    const imageUrlPromises = listResult.items.map(item => getDownloadURL(item));
    const productImageUrls = await Promise.all(imageUrlPromises);
    console.log(`In getProductImageUrls and productImageUrls is ${productImageUrls}`);
    return productImageUrls;
  }

}
