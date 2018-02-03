import {
  Component, ElementRef, Input, OnInit, AfterViewInit, ViewChild, ViewEncapsulation,
  ChangeDetectorRef
} from '@angular/core';
import {MnFullpageOptions} from 'ngx-fullpage/index';
import {environment} from '../../../environments/environment';
import {DataService} from '../../services/data.service';
import {Project, TechnologyBack, TechnologyFront} from "../../models";

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
  public previousProject = null;
  public slideLoaded = false;

  constructor (public dataService: DataService, private cd: ChangeDetectorRef) {
  }

  ngAfterViewInit () {

    // tslint:disable-next-line
    this.options.onLeave = () => this.onLeave();
    this.options.onSlideLeave = () => this.onSlideLeave();
    this.options.afterSlideLoad = () => this.onSlideLoad();
    (<any>$)(this.contentWrapper.nativeElement).fullpage(this.options);
  }

  ngOnInit () {

    setTimeout(() => {
      this.displaySplashscreen = false;

      // Not that good but cannot catch end of animate.css animation,
      // and angular wrappers are not properly working
      // https://www.npmjs.com/package/ngx-animate
      setTimeout(() => this.removeSplashscreen = true, 1000);

    }, environment.production ? 5000 : 1000);

  }

  public clickTechnology (previousProject: Project) {

    // we use timeout to prevent afterLoad to clear the parameter
    this.previousProject = previousProject;
    this.slideLoaded = false;
  }

  public onLeave () {
    if (this.slideLoaded) {
      this.previousProject = null;
    }
  }

  public onSlideLeave () {
    if (this.slideLoaded) {
      this.previousProject = null;
    }
  }

  public onSlideLoad () {
    this.slideLoaded = true;

    // As those events are not angular-based and or click-based we need to force the rendering
    if (this.previousProject != null) {
      this.cd.markForCheck();
    }
  }
}
