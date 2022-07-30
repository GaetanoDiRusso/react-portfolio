import {
  PersonalInfo,
  AboutMe,
  Project,
  Skills,
  Tecnology,
  ContactInfo,
  ContactEmail,
} from "../index";
import { DataResponse } from "../index";

export interface IRemoteRepository {
  getPersonalInfo(): Promise<DataResponse<PersonalInfo>>;
  getAboutMe(): Promise<DataResponse<AboutMe>>;
  getAllProjects(): Promise<DataResponse<Project[]>>;
  getSkills(): Promise<DataResponse<Skills>>;
  getAllTecnologies(): Promise<DataResponse<Tecnology[]>>;
  getContactInfo(): Promise<DataResponse<ContactInfo>>;
  sendEmail(newEmail: ContactEmail): Promise<DataResponse<void>>;
}
