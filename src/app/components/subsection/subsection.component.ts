import {
  AfterViewInit, Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild,
  ViewChildren
} from '@angular/core';
import {Project} from "../../models";

declare var $;


@Component({
  selector: 'millerf-web-subsection',
  templateUrl: './subsection.component.html',
})
export class SubsectionComponent implements AfterViewInit {

  @ViewChild('techused') techused;
  @ViewChild('section') section;

  @Input() subsection;
  @Input() previousAnchor;
  @Input() slideLoaded;
  @Output() clickTechnology: EventEmitter<Project> = new EventEmitter();

  constructor () {
  }

  ngAfterViewInit () {
    setTimeout( () => this.onResize(null), 500);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {

    const screenHeight  = window.innerHeight;
    const sectionHeight = this.section.nativeElement.offsetHeight;
    const height = Math.max(screenHeight, sectionHeight);
    if (this.techused != null) {
      this.techused.nativeElement.style.height = height + 'px';
    }

  }
}
