import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from  '@angular/common/http';

import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';


import { RegisterComponent } from './login/register.component';
import { ExampleComponent } from './public/example/example.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PagesModule,
    SharedModule
  ],
  providers: [
  
],
  bootstrap: [AppComponent]
})
export class AppModule { }
