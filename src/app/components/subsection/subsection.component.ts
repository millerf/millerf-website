import {
  AfterViewInit, ChangeDetectorRef, Component, EventEmitter, HostListener, Input, Output, ViewChild,
} from '@angular/core';
import { Project } from "../../models";

declare var $;


@Component({
  selector: 'millerf-web-subsection',
  templateUrl: './subsection.component.html',
})
export class SubsectionComponent implements AfterViewInit {

  @ViewChild('techused') techused;
  @ViewChild('section') section;
  @ViewChild('images') images;


  @Input() subsection;
  @Input() previousAnchor;
  @Input() slideLoaded;
  @Output() clickTechnology: EventEmitter<Project> = new EventEmitter();

  private touchDelta = null;

  constructor() {
  }

  ngAfterViewInit() {
    setTimeout(() => this.onResize(null), 500);

    if (this.subsection.images.length !== 0) {
      (<any>$)(this.images.nativeElement).mousewheel((event, delta) => {
        (<any>$)(this.images.nativeElement)[0].scrollLeft -= (delta * 30);
        return false;
      })
        .on('touchstart', (e) => {
          this.touchDelta = this.getPosX(e);
        })
        .on('touchleave', (e) => {
          this.touchDelta = null;
        })
        .on('touchmove', (e) => {
          const newDelta = this.getPosX(e);

          if (this.touchDelta != null) {
            (<any>$)(this.images.nativeElement)[0].scrollLeft += this.touchDelta - newDelta;
          }
          this.touchDelta = newDelta;
          return false;
        });
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {

    const screenHeight = window.innerHeight;
    const sectionHeight = this.section.nativeElement.offsetHeight;
    const height = Math.max(screenHeight, sectionHeight);
    if (this.techused != null) {
      this.techused.nativeElement.style.height = height + 'px';
    }

  }

  private getPosX(e) {
    let touch = null;
    if (e.originalEvent.touches) {
      touch = e.originalEvent.touches[0];
    }
    return e.pageX || touch.pageX;
  }

}
