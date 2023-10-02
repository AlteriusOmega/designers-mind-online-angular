import { Injectable } from '@angular/core';
import { Storage, StorageReference, getStorage, ref } from '@angular/fire/storage';
import { initializeApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  storage: Storage;
  // storageRef: StorageReference;

  constructor() {
    initializeApp(environment.firebase);
    this.storage = getStorage();
    // this.storageRef = ref(this.storage);
  }

  // getImage1() {
  //   const image1Ref = ref(this.storage, 'images/dice-puzzle-d12.webp');
  //   console.log(`In getImage1 and fullPath is ${image1Ref.fullPath}, name: ${image1Ref.name}, bucket: ${image1Ref.bucket}`);
  //   return image1Ref;
  // }
}
