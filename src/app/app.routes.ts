import {Routes} from '@angular/router';
import {IpListDisplayComponent} from './ip-list-display/ip-list-display.component';
import {HomePageComponent} from './home-page/home-page.component';

export const ROUTES: Routes = [
  {path: 'ipCalc', component: IpListDisplayComponent},
  {path: '', component: HomePageComponent},

];
