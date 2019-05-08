
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IpListDisplayComponent } from './ip-list-display/ip-list-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule, MatMenuModule, MatTableModule, MatToolbarModule} from '@angular/material';
import { MatCardModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import { MenuComponent } from './menu/menu.component';
import {LogPipe} from './common/pipe/log.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    IpListDisplayComponent,
    HomePageComponent,
    MenuComponent,
    LogPipe,
    PageNotFoundComponent
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
    MatMenuModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [LogPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
