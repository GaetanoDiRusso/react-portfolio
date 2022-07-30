import { Tecnology } from './index'

export class Job {
    readonly companyName: string;
    readonly startedDate: Date;
    readonly current: boolean;
    readonly tecnologies: Tecnology[];
    readonly position: string;
    readonly finishedDate?: Date;
    readonly companyLogo?: string;

    constructor(companyName: string, startedDate: Date, current: boolean, tecnologies: Tecnology[], position: string, finishedDate?: Date, companyLogo?: string){
        this.companyName = companyName;
        this.startedDate = startedDate;
        this.current = current;
        this.tecnologies = tecnologies;
        this.position = position;
        this.finishedDate = finishedDate;
        this.companyLogo = companyLogo;
    }
}