import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'millerf-web-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['../../../assets/scss/menu.scss'],
})
export class MenuComponent implements OnInit {

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
  }

}
