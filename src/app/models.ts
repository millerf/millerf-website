export class Section {
  title: string;
  tag: string;
  display = true; // Used for the content to prevent directive
  subsections: SubSection[] = [];
}

export class SubSection {
  title: string;
  text: string;
}

export class Project extends SubSection {
  mainImageUrl: string;
  images: Array<string>;
}


export class TechnologyFront extends Project {

}

export class TechnologyBack extends TechnologyFront {

}
