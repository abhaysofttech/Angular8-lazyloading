import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/users/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
  //  HeaderComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    //UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
