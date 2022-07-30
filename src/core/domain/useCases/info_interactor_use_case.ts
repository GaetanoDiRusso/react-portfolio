import { PersonalInfo, AboutMe, Skills, Project, ContactInfo, Tecnology, ContactEmail } from '../index'
import { IRemoteRepository, DataResponse } from '../index'

export class InfoInteractorUseCase {
    readonly remoteRepository: IRemoteRepository;

    constructor(remoteRepository: IRemoteRepository){
        this.remoteRepository = remoteRepository
    }

    async getPersonalInfo(): Promise<DataResponse<PersonalInfo>> {
        return this.remoteRepository.getPersonalInfo();
    }

    async getAboutMe(): Promise<DataResponse<AboutMe>> {
        return this.remoteRepository.getAboutMe();
    }

    async getSkills(): Promise<DataResponse<Skills>> {
        return this.remoteRepository.getSkills();
    }

    async getAllProject(): Promise<DataResponse<Project[]>> {
        return this.remoteRepository.getAllProjects();
    }

    async getContactInfo(): Promise<DataResponse<ContactInfo>> {
        return this.remoteRepository.getContactInfo();
    }

    async getAllTecnologies(): Promise<DataResponse<Tecnology[]>> {
        return this.remoteRepository.getAllTecnologies();
    }

    async sendContactEmail(newEmail: ContactEmail): Promise<DataResponse<void>> {
        return this.remoteRepository.sendEmail(newEmail);
    }
}