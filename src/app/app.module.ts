import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MnFullpageModule, MnFullpageService } from 'ngx-fullpage';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MnFullpageModule.forRoot()
  ],
  providers: [MnFullpageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
