import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MnFullpageOptions } from 'ngx-fullpage/index';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'millerf-web-root',
  templateUrl: './app.template.html',
})

export class AppComponent implements OnInit {

  @Input() public options: MnFullpageOptions = new MnFullpageOptions({
    controlArrows: true,
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