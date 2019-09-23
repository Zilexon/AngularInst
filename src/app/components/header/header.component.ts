import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../services/account/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ AccountService ]
})
export class HeaderComponent implements OnInit {
  token: any;
  res = {};
  constructor() { }
  ngOnInit() {

  }
}
