import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from "../../models";

@Component({
  selector: 'millerf-web-subsection',
  templateUrl: './subsection.component.html',
})
export class SubsectionComponent implements OnInit {

  @Input() subsection;

  @Output() clickTechnology: EventEmitter<Project> = new EventEmitter();

  constructor () {
  }

  ngOnInit () {
  }

}
