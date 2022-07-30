import { MultiLanguageText } from './index'

export class Skills {
    readonly description: MultiLanguageText;
    readonly images: [string, string, string, string, string, string];

    constructor(description: MultiLanguageText, images: [string, string, string, string, string, string]) {
        this.description = description;
        this.images = images;
    }
}