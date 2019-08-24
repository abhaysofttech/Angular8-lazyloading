import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/users/login/login.component';
import { HttpClientModule } from '@angular/common/http';

//import { NbThemeModule } from '@nebular/theme';


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
    HttpClientModule,
    //NbThemeModule.forRoot(),
    //UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
