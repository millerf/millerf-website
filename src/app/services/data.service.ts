import { Injectable } from '@angular/core';
import {Section} from '../models';

@Injectable()
export class DataService {

  public sections: Array<Section> = Array();

  constructor() {
    const projects = new Section();
    projects.title = 'Projects';
    projects.tag = 'projects';

    const frontend = new Section();
    frontend  .title = 'Front-end';
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


    this.sections.push(projects);
    this.sections.push(frontend);
    this.sections.push(backend);
    this.sections.push(github);
    this.sections.push(contact);


  }

}
