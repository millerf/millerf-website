import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'millerf-web-subsection',
  templateUrl: './subsection.component.html',
})
export class SubsectionComponent implements OnInit {

  @Input() subsection;

  constructor () {
  }

  ngOnInit () {
  }

}
