export class Section {
  title: string;
  tag: string;
  subsections: SubSection[];
}

export class SubSection {

}

export class Project extends SubSection {
}


export class TechnologyFront extends SubSection {

}

export class TechnologyBack extends TechnologyFront {

}
