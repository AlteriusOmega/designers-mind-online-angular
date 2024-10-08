import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsModule } from './products/products.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartPageComponent } from './cart/cart-page/cart-page.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { SignupComponent } from './users/signup/signup.component';
import { CartWidgetComponent } from './cart/cart-widget/cart-widget.component';
import { AddToCartComponent } from './cart/add-to-cart/add-to-cart.component';
import { FormsModule } from '@angular/forms';

// initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    ProductsComponent,
    ProductDetailComponent,
    CartPageComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    CartWidgetComponent,
    AddToCartComponent,
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
