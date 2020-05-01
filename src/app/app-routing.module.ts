import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { faBoxOpen, faRupeeSign, faTrashAlt, faDice } from '@fortawesome/free-solid-svg-icons';
import { AddmodelComponent } from './addmodel/addmodel.component';
import { BrowseComponent } from './browse/browse.component';
import { SellerregisterComponent } from './sellerregister/sellerregister.component'
import { HomeComponent } from './home/home.component';
import { ManagepasswordComponent } from './managepassword/managepassword.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PaymentComponent } from './payment/payment.component';
import { SellerDashComponent } from './seller-dash/seller-dash.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RenderComponent } from './render/render.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';



const routes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'addmodel', component: AddmodelComponent},
  { path: 'browse', component: BrowseComponent},
  { path: 'browse/:id', component: ProductdetailsComponent},
  { path: 'sellerregister', component: SellerregisterComponent},
  { path : 'home', component: HomeComponent},
  { path: 'forgetpassword', component: ManagepasswordComponent},
  { path: 'AdminDashboard', component: AdminDashComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'SellerDashboard', component: SellerDashComponent},
  { path: 'ProductDetails', component: ProductdetailsComponent},
  { path: 'render', component: RenderComponent},
  { path: 'SellerLogin', component : SellerLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
