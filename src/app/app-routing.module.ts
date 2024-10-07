import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './users/login/login.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { CartPageComponent } from './cart/cart-page/cart-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  // Ex: Lazy loading of signup component. It only gets imported when you navigate to signup route then it loads the SignupComponent
  {
    path: 'signup',
    loadComponent: () =>
      import('./users/signup/signup.component').then((m) => m.SignupComponent),
  },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
