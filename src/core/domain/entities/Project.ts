import { Tecnology, MultiLanguageText } from "./index";

export class Project {
  readonly title: string;
  readonly quickDescription: MultiLanguageText;
  readonly description: MultiLanguageText;
  readonly frontImage: string;
  readonly iconImage: string; 
  readonly usedTecnologies: Tecnology[];
  readonly repositoryUrl?: string;
  readonly demoUrl?: string;
  readonly videoUrl?: string;
  readonly extraImages?: string[];
  readonly finishDate?: Date;

  constructor(
    title: string,
    quickDescription: MultiLanguageText,
    description: MultiLanguageText,
    frontImage: string,
    iconImage: string,
    usedTecnologies: Tecnology[],
    repositoryUrl?: string,
    demoUrl?: string,
    finishDate?: Date,
    extraImages?: string[],
    videoUrl?: string,
  ) {
    this.title = title;
    this.quickDescription = quickDescription;
    this.description = description;
    this.frontImage = frontImage;
    this.iconImage = iconImage;
    this.usedTecnologies = usedTecnologies;
    this.repositoryUrl = repositoryUrl;
    this.demoUrl = demoUrl;
    this.finishDate = finishDate;
    this.extraImages = extraImages;
    this.videoUrl = videoUrl;
  }
}
