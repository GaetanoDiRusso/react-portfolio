export class Tecnology {
    readonly name: string;
    readonly textColor: string;
    readonly logoUrl: string;

    constructor(name: string, textColor: string, logoUrl: string) {
        this.name = name;
        this.textColor = textColor;
        this.logoUrl = logoUrl;
    }
}