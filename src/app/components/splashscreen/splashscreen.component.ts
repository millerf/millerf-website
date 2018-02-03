import {Component, OnInit, OnDestroy, Input} from '@angular/core';

@Component({
  selector: 'millerf-web-splashscreen',
  templateUrl: './splashscreen.component.html',
  styleUrls: ['../../../assets/scss/splashscreen.scss'],
})
export class SplashscreenComponent implements OnInit, OnDestroy {

  @Input() displaySplashscreen: boolean;

  public splashScreenText = '';
  public updateText = false;
  private intervalText;
  private timeoutText;

  private textIndex = 0;
  private textCycle: Array<string> = [
    'Loading website',
    'Enhancing graphics',
    'Calculating vertices',
    'Refactoring text',
    'Traducing sentences',
    'Optimizing code',
    'Learning concepts'
  ];

  constructor () {
  }

  ngOnInit () {
    this.splashScreenText = this.textCycle[this.textIndex++];
    this.intervalText = setInterval(() => {
      this.updateText = true;

      // After the animation, we change the text
      this.timeoutText = setTimeout(() => this.nextText(true), 500);
    }, 2000);
  }

  ngOnDestroy () {
    clearInterval(this.intervalText);
    clearTimeout(this.timeoutText);
  }

  protected nextText (random = false) {
    this.splashScreenText = this.textCycle[random ? Math.floor(Math.random() * this.textCycle.length) : this.textIndex++];
    this.updateText = false;
  }

}
