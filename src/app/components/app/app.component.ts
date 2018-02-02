import {Component, ElementRef, Input, OnInit, AfterViewInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { MnFullpageOptions } from 'ngx-fullpage/index';
import { environment } from '../../../environments/environment';
import { DataService } from '../../services/data.service';

declare var $;


@Component({
  selector: 'millerf-web-root',
  templateUrl: './app.template.html',
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('contentWrapper') contentWrapper: ElementRef;

  @Input() public options: MnFullpageOptions = new MnFullpageOptions({
    controlArrows: true,
    loopBottom: true,
    slidesNavigation: true,
    scrollOverflow: true,
    keyboardScrolling: false,
    scrollingSpeed: 1000,
    menu: '#menu',
    css3: true,
    anchors: [
      'projects', 'frontend', 'backend', 'github', 'contact'
    ],
    sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#f2f2f2'],
  });

  public displaySplashscreen = true;
  public removeSplashscreen = false;

  constructor(public dataService: DataService) {}

  ngAfterViewInit() {

    // tslint:disable-next-line
    (<any>$)(this.contentWrapper.nativeElement).fullpage(this.options);
  }

  ngOnInit() {

    setTimeout(() => {
      this.displaySplashscreen = false;

      // Not that good but cannot catch end of animate.css animation,
      // and angular wrappers are not properly working
      // https://www.npmjs.com/package/ngx-animate
      setTimeout(() => this.removeSplashscreen = true, 1000);

    }, environment.production ? 5000 : 1000);

  }
}
