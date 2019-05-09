import {Routes} from '@angular/router';
import {IpListDisplayComponent} from './ip-list-display/ip-list-display.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {FactoidComponent} from './factoid/factoid.component';
import {AboutMeComponent} from './about-me/about-me.component';

export const ROUTES: Routes = [
  {path: 'ipCalc', component: IpListDisplayComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'factoid', component: FactoidComponent},
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
