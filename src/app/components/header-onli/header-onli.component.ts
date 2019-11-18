import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-onli',
  templateUrl: './header-onli.component.html',
  styleUrls: ['./header-onli.component.scss'],
})
export class HeaderOnliComponent implements OnInit {

  @Input() title;

  constructor() { }

  ngOnInit() {}

}
