import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { GithubRibbonComponent } from './github-ribbon.component';

describe('GithubRibbonComponent', () => {
  let component: GithubRibbonComponent;
  let fixture: ComponentFixture<GithubRibbonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubRibbonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubRibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
