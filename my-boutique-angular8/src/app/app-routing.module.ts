import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { HomeComponent } from './components/home/home.component';
import { DepartmentListComponent } from './components/product/department/department-list/department-list.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { HomeDepartmentListComponent } from './components/home/home-department-list/home-department-list.component';
import { RegisterComponent } from './components/customer/register/register.component';
import { CartComponent } from './components/customer/cart/cart.component';
import { CartDetailsComponent } from './components/customer/cart-details/cart-details.component';
import { CheckoutComponent } from './components/order/checkout/checkout.component';
import { AccessDeniedComponent } from './components/errors/access-denied/access-denied.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';


const routes: Routes = [
  {path: 'login', component: AuthenticateComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'departments', component: DepartmentListComponent},
  {path: 'products/:dept/:cat', component: ProductListComponent},
  {path: 'departments/', component: HomeDepartmentListComponent},
  {path: 'product/Details/:product', component: ProductDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'checkout/:orderId', component: CheckoutComponent},
  {path: 'access-denied', component: AccessDeniedComponent},
  {path: '404', component: NotFoundComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
