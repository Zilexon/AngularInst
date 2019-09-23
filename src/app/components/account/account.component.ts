import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [ AccountService ]
})

export class AccountComponent implements OnInit {
  token: any;
  res = {};
  constructor(private accountService: AccountService) {
    this.token = this.accountService.token;
  }
  ngOnInit() {
    this.res = this.accountService.getData();
    console.log(this.accountService.getData());
  }
}

