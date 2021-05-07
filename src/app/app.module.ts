import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppPopupComponent } from './app-popup.component';
import { AppPopupDirective } from './app-popup.directive';

@NgModule({
  declarations: [
    AppComponent, AppPopupComponent, AppPopupDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
