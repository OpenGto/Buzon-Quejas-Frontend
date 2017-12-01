import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// material angular
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

// librerias
import { MomentModule } from 'angular2-moment';

// routing
import { Routing } from './app.routing';

// services
import { AuthService } from './auth/services/auth.service';

// componentes
import { AppComponent } from './app.component';
import { SigninComponent } from './auth/components/signin/signin.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { ComplaintListComponent } from './complaint/components/complaint-list/complaint-list.component';
import { HomeComponent } from './layout/home/home.component';
import { SuggestionListComponent } from './suggestion/components/suggestion-list/suggestion-list.component';


// module
@NgModule({
  declarations: [
    AppComponent,
    // home
    HomeComponent,
    // auth
    SigninComponent,
    SignupComponent,
    // complaint
    ComplaintListComponent,
    // suggestion
    SuggestionListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule,
    Routing, // ROUTING para nuestra app
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

