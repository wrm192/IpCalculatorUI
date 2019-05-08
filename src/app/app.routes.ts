import {Routes} from '@angular/router';
import {IpListDisplayComponent} from './ip-list-display/ip-list-display.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

export const ROUTES: Routes = [
  {path: 'ipCalc', component: IpListDisplayComponent},
  { path: '',   redirectTo: '/maybe', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
