export class PersonalInfo {
    readonly title: string;
    readonly subtitle: string;
    readonly CVUrl: string;
    readonly imageUrl: string;

    constructor(title: string, subtitle: string, CVUrl: string, imageUrl: string) {
        this.title = title;
        this.subtitle = subtitle;
        this.CVUrl = CVUrl;
        this.imageUrl = imageUrl;
    }
}