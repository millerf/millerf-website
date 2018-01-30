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
    ]),
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
    const intervalText = setInterval(() => {
      this.updateText = true;
      setTimeout(() => this.nextText(), 1000);
    }, 2500);

    // setTimeout(() => {
    //   this.displaySplashscreen = 'hidden';
    //   clearInterval(intervalText);
    // }, 5000);

  }

  protected nextText() {
    this.splashScreenText = this.textCycle[this.textIndex++];
    this.textIndex %= this.textCycle.length;
    this.updateText = false;
  }

}
