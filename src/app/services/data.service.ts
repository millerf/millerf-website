import { Injectable } from '@angular/core';
import { Project, Section, TechnologyBack, TechnologyFront } from '../models';

declare var require;


@Injectable()
export class DataService {

  public sections: Array<Section> = [];

  public presentation: Section;
  public angular: TechnologyFront;
  public angular2: TechnologyFront;
  public ionic: TechnologyFront;
  public html: TechnologyFront;
  public php_millerf_admin: TechnologyBack;
  public python_django: TechnologyBack;
  public django_channels_jsonrpc: TechnologyBack;
  public github: TechnologyBack;
  public gitlab: TechnologyBack;
  public mysql: TechnologyBack;
  public postgresql: TechnologyBack;


  constructor() {
    this.presentation = new Section('presentation');
    this.presentation.title = 'Presentation';
    this.presentation.display = false;

    const projects = new Section('projects');
    projects.title = 'Projects';

    const frontend = new Section('frontend');
    frontend.title = 'Front-end';

    const backend = new Section('backend');
    backend.title = 'Back-end';

    const github = new Section('github');
    github.title = 'Github / Gitlab';

    const contact = new Section('contact');
    contact.title = 'Contact';
    contact.display = false;

    this.sections.push(this.presentation);
    this.presentation.section_number = this.sections.length - 1;
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

    this.angular = new TechnologyFront('angularjs');
    this.angular.title = 'AngularJS';
    this.angular.text = require('../template/angularjs.template.html');
    this.angular.text2 = require('../template/angularjs-2.template.html');
    frontend.addSubSection(this.angular);

    this.angular2 = new TechnologyFront('angularx');
    this.angular2.title = 'Angular X';
    this.angular2.text = require('../template/angularx.template.html');
    this.angular2.text2 = require('../template/angularx-2.template.html');
    frontend.addSubSection(this.angular2);

    this.ionic = new TechnologyFront('ionic');
    this.ionic.title = 'Ionic';
    this.ionic.text = require('../template/ionic.template.html');
    this.ionic.text2 = require('../template/ionic-2.template.html');
    frontend.addSubSection(this.ionic);

    this.html = new TechnologyFront('html5');
    this.html.title = 'HTML 5/ CSS / SCSS / jQuery';
    this.html.text = require('../template/html5.template.html');
    this.html.text2 = require('../template/html5-2.template.html');
    frontend.addSubSection(this.html);

    this.python_django = new TechnologyBack('python');
    this.python_django.title = 'Python django & Celery';
    this.python_django.text = require('../template/pythondjango.template.html');
    this.python_django.text2 = require('../template/pythondjango-2.template.html');
    backend.addSubSection(this.python_django);

    this.django_channels_jsonrpc = new TechnologyBack('django-channels-jsonrpc');
    this.django_channels_jsonrpc.title = 'django-channels-jsonrpc';
    this.django_channels_jsonrpc.github = 'millerf/django-channels-jsonrpc';
    this.django_channels_jsonrpc.text = require('../template/djangochannels.template.html');
    this.django_channels_jsonrpc.text2 = require('../template/djangochannels-2.template.html');
    backend.addSubSection(this.django_channels_jsonrpc);

    this.php_millerf_admin = new TechnologyBack('millerf_admin');
    this.php_millerf_admin.title = 'PHP / Miller/F Admin';
    this.php_millerf_admin.text = require('../template/millerfadmin.template.html');
    this.php_millerf_admin.text2 = require('../template/millerfadmin-2.template.html');
    backend.addSubSection(this.php_millerf_admin);

    this.mysql = new TechnologyBack('mysql');
    this.mysql.title = 'MySQL';
    this.mysql.text = require('../template/mysql.template.html');
    this.mysql.text2 = require('../template/mysql-2.template.html');
    backend.addSubSection(this.mysql);


    this.postgresql = new TechnologyBack('postgre');
    this.postgresql.title = 'PostgreSQL';
    this.postgresql.text = require('../template/postgre.template.html');
    this.postgresql.text2 = require('../template/postgre-2.template.html');
    backend.addSubSection(this.postgresql);

    this.github = new TechnologyBack('millerf');
    this.github.title = 'Github / Travis CI';
    this.github.tag = 'github';
    this.github.text = require('../template/github.template.html');
    this.github.text2 = require('../template/github-2.template.html');
    github.addSubSection(this.github);

    this.gitlab = new TechnologyBack('gitlab');
    this.gitlab.title = 'Gitlab / Gitlab CI';
    this.gitlab.text = require('../template/gitlab.template.html');
    this.gitlab.text2 = require('../template/gitlab-2.template.html');
    github.addSubSection(this.gitlab);

    this.createProjects(projects);

  }

  /**
   * Returns only displayable sections (to prevent contact section to be displayed)
   * @returns {Section[]}
   */
  public getDisplayedSections() {
    return this.sections.filter((section) => section.display);
  }


  public getAnchors() {
    return this.sections.map((section) => section.tag);
  }

  private createProjects(projects) {
    let project = new Project('mozaik-3');
    project.title = 'Mozaik phase 3';
    project.text = require('../template/mozaik3.template.html');
    project.text2 = require('../template/mozaik3-2.template.html');
project.mainImageUrl = 'assets/img/projects/mozaik-phase3/mozaik-phase3.png';
    project.images = [
      'assets/img/projects/mozaik-phase3/mozaik-phase3-1.jpg',
      'assets/img/projects/mozaik-phase3/mozaik-phase3-2.jpg',
      'assets/img/projects/mozaik-phase3/mozaik-phase3-3.jpg',
      'assets/img/projects/mozaik-phase3/mozaik-phase3-4.jpg'];
    project.addTechonologies(this.angular2, this.ionic, this.python_django, this.gitlab, this.django_channels_jsonrpc, this.postgresql);
    projects.addSubSection(project);


    project = new Project('mozaik-2');
    project.title = 'Mozaik phase 2';
    project.text = require('../template/mozaik2.template.html');
    project.text2 = require('../template/mozaik2-2.template.html');
project.mainImageUrl = 'assets/img/projects/mozaik-phase2/mozaik-phase2.png';
    project.images = [
      'assets/img/projects/mozaik-phase2/mozaik-phase2-1.png',
      'assets/img/projects/mozaik-phase2/mozaik-phase2-2.png',
      'assets/img/projects/mozaik-phase2/mozaik-phase2-3.png',
      'assets/img/projects/mozaik-phase2/mozaik-phase2-4.png',
      'assets/img/projects/mozaik-phase2/mozaik-phase2-5.png',
      'assets/img/projects/mozaik-phase2/mozaik-phase2-6.png',
      'assets/img/projects/mozaik-phase2/mozaik-phase2-7.png'];
    project.addTechonologies(this.angular, this.ionic, this.python_django, this.gitlab, this.html, this.postgresql);
    projects.addSubSection(project);

    project = new Project('mozaik-1');
    project.title = 'Mozaik phase 1';
    project.text = require('../template/mozaik1.template.html');
    project.text2 = require('../template/mozaik1-2.template.html');
project.mainImageUrl = 'assets/img/projects/mozaik-phase1/mozaik-phase1.png';
    project.images = [
      'assets/img/projects/mozaik-phase1/mozaik-phase1-1.png',
      'assets/img/projects/mozaik-phase1/mozaik-phase1-2.png',
      'assets/img/projects/mozaik-phase1/mozaik-phase1-3.png'];
    project.addTechonologies(this.html, this.ionic, this.php_millerf_admin, this.mysql);
    projects.addSubSection(project);


    project = new Project('cg-spectrum');
    project.title = 'CG Spectrum';
    project.mainImageUrl = 'assets/img/projects/cgspectrum/logo.png';
    project.images = [
      'assets/img/projects/cgspectrum/cgspectrum1.png',
      'assets/img/projects/cgspectrum/cgspectrum2.png',
      'assets/img/projects/cgspectrum/cgspectrum3.png'];
    project.text = '<a target="_blank" href="//www.cgspectrum.com.au">http://www.cgspectrum.com.au</a>';
    project.addTechonologies(this.html, this.github, this.php_millerf_admin, this.mysql);
    projects.addSubSection(project);

    project = new Project('mirador');
    project.title = 'Project Mirador';
    project.images = [
      'assets/img/projects/mirador/mirador1.png',
      'assets/img/projects/mirador/mirador2.png'];
    project.mainImageUrl = 'assets/img/projects/mirador/logo.svg';
    project.text = '<a target="_blank" href="//www.project-mirador.com">http://www.project-mirador.com</a> is an Europe-founded association that helps raise awareness about geo-political crisis and conflicts. <br/><br/> Activities are based upon a Javascript simulator and chat between participants. ';
    project.addTechonologies(this.html, this.php_millerf_admin, this.mysql);
    projects.addSubSection(project);

    project = new Project('ramdam');
    project.title = 'Ramdam';
    project.mainImageUrl = 'assets/img/projects/ramdam/logo.svg';
    project.text = '<a target="_blank" href="//www.ramdam.com/">http://www.ramdam.com/</a> is an online school for 3D and animation artists based in Melbourne, Australia.';
    project.addTechonologies(this.html, this.php_millerf_admin, this.mysql);
    projects.addSubSection(project);

  }
}
