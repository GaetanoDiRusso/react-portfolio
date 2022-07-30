export class ContactEmail {
    readonly name: string;
    readonly email: string;
    readonly message: string;

    constructor(name: string, email: string, message: string) {
        this.name = name;
        this.email = email;
        this.message = message;
    }
}