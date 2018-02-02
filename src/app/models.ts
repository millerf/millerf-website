

export class Section {
  title: string;
  tag: string;
  display = true; // Used for the content to prevent directive
  subsections: SubSection[] = [];
  section_number: number;

  public addSubSection (subSection: SubSection) {
    this.subsections.push(subSection);
    subSection.section = this;
  }
}

export class SubSection {
  title: string;
  tag: string;
  text: string;
  github: string = null;
  section: Section;
}

export class Project extends SubSection {
  mainImageUrl: string;
  images: Array<string> = [];
  technologies: Array<TechnologyFront | TechnologyBack> = [];
}


export class TechnologyFront extends Project {

}

export class TechnologyBack extends TechnologyFront {

}
