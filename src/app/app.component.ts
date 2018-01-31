import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MnFullpageOptions } from 'ngx-fullpage/index';
import { environment } from '../environments/environment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
  protected splashScreenText = '';
  protected updateText = false;
  protected contact_sent = false;
  protected contact_error = false;
  protected message_input: string;
  protected subject_input: string;
  protected email_input: string;
  protected message: string;
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
      this.displaySplashscreen = false;

      // Not that good but cannot catch end of animate.css animation,
      // and angular wrappers are not properly working
      // https://www.npmjs.com/package/ngx-animate
      setTimeout(() => this.removeSplashscreen = true, 1000);

      clearInterval(intervalText);
      clearTimeout(timeoutText);
    }, environment.production ? 5000 : 1000);

  }

  protected nextText(random = false) {
    this.splashScreenText = this.textCycle[random ? Math.floor(Math.random() * this.textCycle.length) : this.textIndex++];
    this.updateText = false;
  }

  protected send_contact(f: NgForm) {

    console.info(f.value);
    if (!f.valid) {
      this.contact_error = true;
      console.info('invalid');
      return;
    }
    this.contact_error = false;
    this.contact_sent = true;

    setTimeout(() => this.contact_sent = false, 5000);
  }

}
