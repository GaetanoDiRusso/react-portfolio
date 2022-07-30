import { MultiLanguageText } from "./index";

export type Language = {
    readonly language: string;
    readonly description?: string;
    readonly certificateUrl?: string;
}

export class AboutMe {
    readonly description: MultiLanguageText;
    readonly languages: Language[];

    constructor(description: MultiLanguageText, languages: Language[]){
        this.description = description;
        this.languages = languages
    }
}