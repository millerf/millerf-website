import {Injectable} from '@angular/core';
import {Project, Section, TechnologyBack, TechnologyFront} from '../models';

declare var require;


@Injectable()
export class DataService {

  public sections: Array<Section> = [];
  private angular: TechnologyFront;
  private angular2: TechnologyFront;
  private ionic: TechnologyFront;
  private html: TechnologyFront;
  private php_millerf_admin: TechnologyBack;
  private python_django: TechnologyBack;
  private django_channels_jsonrpc: TechnologyBack;
  private github: TechnologyBack;
  private gitlab: TechnologyBack;

  constructor () {
    const projects = new Section();
    projects.title = 'Projects';
    projects.tag = 'projects';

    const frontend = new Section();
    frontend.title = 'Front-end';
    frontend.tag = 'frontend';

    const backend = new Section();
    backend.title = 'Back-end';
    backend.tag = 'backend';

    const github = new Section();
    github.title = 'Github / Gitlab';
    github.tag = 'github';

    const contact = new Section();
    contact.title = 'Contact';
    contact.tag = 'contact';
    contact.display = false;


    this.sections.push(projects);
    projects.section_number = this.sections.length - 1;
    this.sections.push(frontend);
    frontend.section_number = this.sections.length - 1;
    this.sections.push(backend);
    backend.section_number = this.sections.length - 1;
    this.sections.push(github);
    github.section_number = this.sections.length - 1;
    this.sections.push(contact);
    contact.section_number = this.sections.length - 1;

    this.angular = new TechnologyFront();
    this.angular.title = 'AngularJS';
    this.angular.tag = 'angularjs';
    frontend.addSubSection(this.angular);

    this.angular2 = new TechnologyFront();
    this.angular2.title = 'Angular X';
    this.angular2.tag = 'Angularx';
    frontend.addSubSection(this.angular2);

    this.ionic = new TechnologyFront();
    this.ionic.title = 'Ionic';
    this.ionic.tag = 'ionic';
    frontend.addSubSection(this.ionic);

    this.html = new TechnologyFront();
    this.html.title = 'HTML / CSS / SCSS / jQuery';
    this.html.tag = 'html';
    frontend.addSubSection(this.html);

    this.python_django = new TechnologyBack();
    this.python_django.title = 'Python django & Celery';
    this.python_django.tag = 'python';
    backend.addSubSection(this.python_django);

    this.django_channels_jsonrpc = new TechnologyBack();
    this.django_channels_jsonrpc.title = 'django-channels-jsonrpc';
    this.django_channels_jsonrpc.tag = 'django-channels-jsonrpc';
    backend.addSubSection(this.django_channels_jsonrpc);

    this.php_millerf_admin = new TechnologyBack();
    this.php_millerf_admin.title = 'PHP / Miller/F Admin';
    this.php_millerf_admin.tag = 'millerf_admin';
    backend.addSubSection(this.php_millerf_admin);


    this.github = new TechnologyBack();
    this.github.title = 'Github / Travis CI';
    this.github.tag = 'github';
    github.addSubSection(this.github);

    this.gitlab = new TechnologyBack();
    this.gitlab.title = 'Gitlab / Gitlab CI';
    this.gitlab.tag = 'gitlab';
    this.gitlab.text = 'Nice Project management';
    github.addSubSection(this.gitlab);

    this.createProjects(projects);

  }

  /**
   * Returns only displayable sections (to prevent contact section to be displayed)
   * @returns {Section[]}
   */
  public getDisplayedSections () {
    return this.sections.filter((section) => section.display);
  }


  private createProjects (projects) {
    let project = new Project();
    project.title = 'Mozaik phase 3';
    project.text = require('../template/mozaik3.template.html');
    project.mainImageUrl = 'assets/img/projects/mozaik-phase3/mozaik-phase3.png';
    project.images = ['assets/img/projects/mozaik-phase3/mozaik-phase3-1.jpg',
      'assets/img/projects/mozaik-phase3/mozaik-phase3-2.jpg',
      'assets/img/projects/mozaik-phase3/mozaik-phase3-3.jpg',
      'assets/img/projects/mozaik-phase3/mozaik-phase3-4.jpg'];
    project.technologies.push(this.angular2, this.ionic, this.python_django, this.gitlab, this.django_channels_jsonrpc);
    projects.addSubSection(project);


    project = new Project();
    project.title = 'Mozaik phase 2';
    project.text = require('../template/mozaik2.template.html');
    project.mainImageUrl = 'assets/img/projects/mozaik-phase2/mozaik-phase2.png';
    project.images = ['assets/img/projects/mozaik-phase2/mozaik-phase2-1.png',
      'assets/img/projects/mozaik-phase2/mozaik-phase2-2.png',
      'assets/img/projects/mozaik-phase2/mozaik-phase2-3.png',
      'assets/img/projects/mozaik-phase2/mozaik-phase2-4.png',
      'assets/img/projects/mozaik-phase2/mozaik-phase2-5.png',
      'assets/img/projects/mozaik-phase2/mozaik-phase2-6.png',
      'assets/img/projects/mozaik-phase2/mozaik-phase2-7.png'];
    project.technologies.push(this.angular, this.ionic, this.python_django, this.gitlab, this.html);
    projects.addSubSection(project);

    project = new Project();
    project.title = 'Mozaik phase 1';
    project.text = require('../template/mozaik1.template.html');
    project.mainImageUrl = 'assets/img/projects/mozaik-phase1/mozaik-phase1.png';
    project.images = ['assets/img/projects/mozaik-phase1/mozaik-phase1-1.png',
      'assets/img/projects/mozaik-phase1/mozaik-phase1-2.png',
      'assets/img/projects/mozaik-phase1/mozaik-phase1-3.png'];
    project.technologies.push(this.html, this.ionic, this.php_millerf_admin);
    projects.addSubSection(project);


    project = new Project();
    project.title = 'CG Spectrum';
    project.mainImageUrl = 'assets/img/projects/cgspectrum/logo.png';
    project.text = '<a target="_blank" href="//www.cgspectrum.com.au">http://www.cgspectrum.com.au</a>';
    project.technologies.push(this.html, this.github, this.php_millerf_admin);
    projects.addSubSection(project);

    project = new Project();
    project.title = 'Ramdam';
    project.mainImageUrl = 'assets/img/projects/ramdam/logo.svg';
    project.text = '<a target="_blank" href="//www.ramdam.com/">http://www.ramdam.com/</a>';
    project.technologies.push(this.html, this.php_millerf_admin);
    projects.addSubSection(project);

    project = new Project();
    project.title = 'Project Mirador';
    project.mainImageUrl = 'assets/img/projects/mirador/logo.svg';

    project.text = '<a target="_blank" href="//www.project-mirador.com">http://www.project-mirador.com</a>';
    project.technologies.push(this.html, this.php_millerf_admin);
    projects.addSubSection(project);
  }
}
