import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IpListDisplayComponent } from './ip-list-display/ip-list-display.component';

import {HttpClientModule} from '@angular/common/http';
import { MatTableModule} from '@angular/material';
import { MatCardModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    IpListDisplayComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
