import {Component, OnInit} from '@angular/core';
import {CalcultedIpAddresses} from '../common/models/ipaddress.model';
import {ApiService} from '../common/services/api-service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-ip-list-display',
  templateUrl: './ip-list-display.component.html',
  styleUrls: ['./ip-list-display.component.css']
})
export class IpListDisplayComponent implements OnInit {

  // TODO 1- Make a form for input
  // 2 - Parameterize the api to actually send properly
  // 3- Pagination on the backend
  // 4- Add colour to anything, super bland
  displayedColumns: string[] = ['wireAddress', 'firstHost', 'lastHost', 'broadcastAddress'];
  networkInfo$: Observable<CalcultedIpAddresses>;

  constructor(private apiService: ApiService) {
    this.networkInfo$ = apiService.get();
  }

  ngOnInit() {
  }

}
