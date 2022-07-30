export interface IDataSourceApi {
    fetchTitle(): Promise<any>;
    fetchAboutMe(): Promise<any>;
    fetchAllProjects(): Promise<any>;
    fetchSkills(): Promise<any>;
    fetchAllTecnologies(): Promise<any>;
    fetchContactInfo(): Promise<any>;
}