abstract class Anchored {
  tag: string;

  constructor (tag) {
    this.tag = tag;
  }

  abstract getAnchor ();
}

export class Section extends Anchored {
  title: string;
  display = true; // Used for the content to prevent directive
  subsections: SubSection[] = [];
  section_number: number;

  public addSubSection (subSection: SubSection) {
    this.subsections.push(subSection);
    subSection.section = this;
  }

  getAnchor () {
    return '#' + this.tag;
  }
}

export class SubSection extends Anchored {
  title: string;
  text: string;
  github: string = null;
  section: Section;

  getAnchor () {
    return '#' + this.section.tag + '/' + this.tag;
  }
}

export class Project extends SubSection {
  isProject = true;
  mainImageUrl: string;
  images: Array<string> = [];
  technologies: Array<TechnologyFront | TechnologyBack> = [];

  addTechonologies (...techs: Array<TechnologyBack | TechnologyFront>) {
    for (const tech of techs) {
      this.technologies.push(tech);
      tech.projects.push(this);
    }
  }
}

export class TechnologyFront extends Project {
  isProject = false;
  projects: Array<Project> = [];
}

export class TechnologyBack extends TechnologyFront {

}
