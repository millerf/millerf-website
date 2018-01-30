import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MnFullpageModule, MnFullpageService } from 'ngx-fullpage';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MnFullpageModule.forRoot()
  ],
  providers: [MnFullpageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
