export class ContactInfo {
    readonly mail: string;
    readonly phoneNumber: string;

    constructor(mail: string, phoneNumber: string){
        this.mail = mail;
        this.phoneNumber = phoneNumber;
    }
}