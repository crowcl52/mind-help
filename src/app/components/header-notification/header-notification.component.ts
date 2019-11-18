import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-notification',
  templateUrl: './header-notification.component.html',
  styleUrls: ['./header-notification.component.scss'],
})
export class HeaderNotificationComponent implements OnInit {

  @Input() title;

  constructor() { }

  ngOnInit() {}

}
