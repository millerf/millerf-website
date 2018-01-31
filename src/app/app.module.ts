import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MnFullpageModule, MnFullpageService } from 'ngx-fullpage';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from './components/contactform/contact-form.component';
import { SplashscreenComponent } from './components/splashscreen/splashscreen.component';
import { MenuComponent } from './components/menu/menu.component';
import {DataService} from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    SplashscreenComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MnFullpageModule.forRoot()
  ],
  providers: [MnFullpageService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
