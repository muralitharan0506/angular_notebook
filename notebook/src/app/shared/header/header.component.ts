import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppserviceService } from 'src/app/appservice.service';
import { headerMenu } from '../utlis/type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()
  headerMenu?: headerMenu[];
  constructor(private router: Router, private appservice: AppserviceService) {}
  ngOnInit(): void {}

  signout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  collapse() {
    this.appservice.collapse();
  }
}
