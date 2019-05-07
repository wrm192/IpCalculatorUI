
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IpListDisplayComponent } from './ip-list-display/ip-list-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule, MatTableModule} from '@angular/material';
import { MatCardModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    IpListDisplayComponent,
    HomePageComponent,
    MenuComponent,
  ],
  imports: [
    HttpClientModule,
    MatTableModule,
    RouterModule.forRoot(ROUTES),
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
