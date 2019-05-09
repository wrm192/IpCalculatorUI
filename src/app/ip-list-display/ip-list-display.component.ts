import {Component, OnInit} from '@angular/core';
import {CalcultedIpAddresses} from '../common/models/ipaddress.model';
import {ApiService} from '../common/services/api-service';
import {Observable} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ip-list-display',
  templateUrl: './ip-list-display.component.html',
  styleUrls: ['./ip-list-display.component.css']
})
export class IpListDisplayComponent implements OnInit {

  submitted: boolean;
  displayedColumns: string[] = ['seq', 'wireAddress', 'firstHost', 'lastHost', 'broadcastAddress'];
  networkInfo$: Observable<CalcultedIpAddresses>;
  form: FormGroup;

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.form = this.fb.group({
      ipAddress: new FormControl('', [Validators.minLength(7), Validators.maxLength(15)]),
      suffix: new FormControl('', [Validators.required])
    });
    this.submitted = false;
  }

  getNetworkData() {
    let ipAddress: string;
    this.submitted = true;
    ipAddress = this.form.controls['ipAddress'].value;
    console.log(ipAddress);


    this.networkInfo$ = this.apiService.get(this.form.controls['ipAddress'].value, this.form.controls['suffix'].value);
  }

  ngOnInit() {
  }

}
