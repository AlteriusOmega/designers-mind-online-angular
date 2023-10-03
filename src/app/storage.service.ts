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

  getImage1() {
    const image1Ref = ref(this.storage, 'images/dice-puzzle-d12.webp');
    console.log(`In getImage1 and fullPath is ${image1Ref.fullPath}, name: ${image1Ref.name}, bucket: ${image1Ref.bucket}`);
    return image1Ref;
  }

  async getProductImageUrls(productDocument: DocumentData): Promise<string[]> {
    const imageFolderPath = `images/${productDocument["image-folder"]}`;
    // console.log(`In getProductImageUrls and imageFolderPath is ${imageFolderPath}`);
    const folderRef = ref(this.storage, imageFolderPath);
    // console.log(`In getProductImageUrls and folderRef is `, folderRef);
    let listResult = await listAll(folderRef);
    // console.log(`In getProductImageUrls and listResult is `, listResult);
    const imageUrlPromises = listResult.items.map(item => getDownloadURL(item));
    const productImageUrls = await Promise.all(imageUrlPromises);
    console.log(`In  and  is ${productImageUrls}`);
    return productImageUrls;
  }

  async getImage1Url(imageFolder: String) {
    // const imageFolderPath =
  }
}
