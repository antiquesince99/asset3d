import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AddmodelComponent } from './addmodel/addmodel.component';
import { BrowseComponent } from './browse/browse.component';
import { SellerregisterComponent } from './sellerregister/sellerregister.component';
import { HomeComponent } from './home/home.component';
import { ManagepasswordComponent } from './managepassword/managepassword.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddmodelComponent,
    BrowseComponent,
    SellerregisterComponent,
    HomeComponent,
    ManagepasswordComponent,
    AdminDashComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
