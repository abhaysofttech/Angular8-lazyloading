import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/users/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { TwentyFiveWindowRatingWithWeightageComponent } from './shared/components/twenty-five-window-rating-with-weightage/twenty-five-window-rating-with-weightage.component';
import { SharedModule } from './shared/shared.module';

//import { NbThemeModule } from '@nebular/theme';


@NgModule({
  declarations: [
    AppComponent,
    //  HeaderComponent,
    LoginComponent,
    AuthComponent,
  //  LoadingSpinnerComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
    //NbThemeModule.forRoot(),
    //UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
