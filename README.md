# DesignersMindOnlineAngular

## Description
This is an Angular project I developed utilizing Firebase Firestore, Storage, and Authentication for the backend as well as Bootstrap and Less.js for styling. It will serve as the new storefront to replace my Etsy store Designer's Mind Online where I sell 3D printed and laser-cut gifts that I design and create myself.

**This is what it looks like:**
#### Products Page
![Products page](./assets/dmo-quartz-products.png)

#### About Page
![About page](./assets/dmo-quartz-about.png)

## Firebase Components

### Firestore
Firestore is a database, but it's different from SQL in that it's a document database rather than a relational one, meaning it doesn't use rigid tables. In this application we are primarily using it to store the products with info like the name, description, price, and image directory.

### Storage
Firebase Storage uses a bucket and folder structure. This app makes use of Storage mostly for the product images, but may add user profile pictures and more in the future. Since these images are separate from Firestore, we need to reference them in the product documents via the image-folder field. That tells the application which folder to look in to get the images for any given product

### Auth
Auth is Firebase's authentication system which is very powerful and allows for authenticating through email and password, Facebook, Google and more. Currently we are using just email and password to keep things simple

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
