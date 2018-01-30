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

  public displaySplashscreen = 'shown';
  protected splashScreenText = '';
  protected updateText = false;
  private textIndex = 0;
  private textCycle: Array<string> = [
    'Updating website',
    'Enhancing graphics',
    'Calculating vertices',
    'Refactoring text',
    'Traducing sentences',
    'Optimizing code',
    'Learning concepts'
  ];

  ngOnInit() {
    this.splashScreenText = this.textCycle[this.textIndex++];
    let timeoutText;
    const intervalText = setInterval(() => {
      this.updateText = true;
      timeoutText = setTimeout(() => this.nextText(true), 1000);
    }, 2500);

    setTimeout(() => {
      this.displaySplashscreen = 'removed';
      clearInterval(intervalText);
      clearTimeout(timeoutText);
    }, 6500);

  }

  protected nextText(random = false) {
    this.splashScreenText = this.textCycle[random ? Math.floor(Math.random() * this.textCycle.length) : this.textIndex++];
    this.updateText = false;
  }

}
