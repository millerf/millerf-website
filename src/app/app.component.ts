import { Component, Input, OnInit } from '@angular/core';
import { MnFullpageOptions } from 'ngx-fullpage/index';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({opacity: 1})),
      state('hidden', style({opacity: 0})),
      transition('* => *', animate('.7s'))
    ])
  ]
})

export class AppComponent implements OnInit {

  @Input() public options: MnFullpageOptions = new MnFullpageOptions({
    controlArrows: true,
    scrollingSpeed: 1000,
    menu: '#menu',
    css3: true,
    anchors: [
      'frontend', 'backend', 'projects', 'github', 'contact'
    ]
  });

  protected displaySplashscreen = 'shown';

  ngOnInit() {
    setTimeout(() => this.displaySplashscreen = 'hidden', 2000);
  }

}
