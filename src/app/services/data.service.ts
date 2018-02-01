import { Injectable } from '@angular/core';
import { Project, Section, SubSection, TechnologyBack, TechnologyFront } from '../models';

@Injectable()
export class DataService {

  public sections: Array<Section> = Array();

  constructor() {
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
    this.sections.push(frontend);
    this.sections.push(backend);
    this.sections.push(github);
    this.sections.push(contact);

    this.createProjects(projects);

    let technology = new TechnologyFront();
    technology.title = 'AngularJS & Angular X';
    frontend.subsections.push(technology);

    technology = new TechnologyFront();
    technology.title = 'Ionic';
    frontend.subsections.push(technology);

    technology = new TechnologyFront();
    technology.title = 'HTML / CSS / SCSS / jQuery';
    frontend.subsections.push(technology);

    technology = new TechnologyBack();
    technology.title = 'Python django & Celery';
    backend.subsections.push(technology);

    technology = new TechnologyBack();
    technology.title = 'django-channels-jsonrpc';
    backend.subsections.push(technology);

    technology = new TechnologyBack();
    technology.title = 'PHP / Miller/F Admin';
    backend.subsections.push(technology);



    technology = new TechnologyBack();
    technology.title = 'Github / Travis CI';
    github.subsections.push(technology);

    technology = new TechnologyBack();
    technology.title = 'Gitlab / Gitlab CI';
    technology.text = 'Nice Project management';
    github.subsections.push(technology);

  }

  private createProjects(projects) {
    let project = new Project();
    project.title = 'Mozaik phase 3';
    project.text = 'Mozaik is a domotic project composed of 3';
    projects.subsections.push(project);

    project = new Project();
    project.title = 'Mozaik phase 2';
    project.text = 'Mozaik is a domotic project composed of 3';
    projects.subsections.push(project);

    project = new Project();
    project.title = 'Mozaik phase 1';
    project.text = 'Mozaik is a domotic project composed of 3';
    projects.subsections.push(project);


    project = new Project();
    project.title = 'CG Spectrum';
    project.text = '<a href="www.cgspectrum.com.au">CG</a>';
    projects.subsections.push(project);

    project = new Project();
    project.title = 'Ramdam';
    project.text = '<a href="www.ramdam-magazine.com">CG</a>';
    projects.subsections.push(project);

    project = new Project();
    project.title = 'Project Mirador';
    project.text = '<a href="www.project-mirador.com">Project-mirador</a>';
    projects.subsections.push(project);


  }

  public getiDsplayedSections() {
    return this.sections.filter( (section) => section.display);
  }

}
