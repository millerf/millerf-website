import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'millerf-web-github-ribbon',
  templateUrl: './github-ribbon.component.html',
  styleUrls: ['../../../assets/scss/github-ribbon.component.scss']
})
export class GithubRibbonComponent implements OnInit {

  @Input() address;

  constructor() { }

  ngOnInit() {
  }

}
