import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IpListDisplayComponent } from './ip-list-display/ip-list-display.component';

@NgModule({
  declarations: [
    AppComponent,
    IpListDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
