import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MnFullpageModule, MnFullpageService } from 'ngx-fullpage';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MnFullpageModule.forRoot()
  ],
  providers: [MnFullpageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
