import { Component, OnInit } from '@angular/core';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  constructor(public appservice: AppserviceService) {}

  ngOnInit(): void {}
}
