import {
  PersonalInfo,
  AboutMe,
  Project,
  Skills,
  Tecnology,
  ContactInfo,
  MultiLanguageText,
  ContactEmail,
  Language,
  IRemoteRepository,
  DataResponse,
  CustomError,
  errorCodeEnum,
} from "../../domain";

import emailjs from "@emailjs/browser";

import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

export class StrapiRemoteRepositoryImpl implements IRemoteRepository {
  private usedTecnologies: Tecnology[] = [];

  constructor() {}

  async getPersonalInfo(): Promise<DataResponse<PersonalInfo>> {
    try {
      const url = baseUrl + "/api/my-info" + "?populate=*";
      const { data } = await axios.get(url);
      const myInfoDTO = data.data.attributes;
      return new PersonalInfo(
        myInfoDTO.name,
        myInfoDTO.position,
        baseUrl + myInfoDTO.CVUrl,
        baseUrl + myInfoDTO.photo.data.attributes.url
      );
    } catch (error) {
      throw new CustomError(errorCodeEnum.SERVER_ERROR, "Server Error");
    }
  }

  async getAboutMe(): Promise<DataResponse<AboutMe>> {
    try {
      const url = baseUrl + "/api/about-me" + "?populate=*";
      const { data } = await axios.get(url);
      const aboutMeDTO = data.data.attributes;

      const languages: Language[] = aboutMeDTO.languages.map(
        (language: any) => ({
          language: language.language,
          description: language.description,
          certificateUrl: language.certificateUrl ? baseUrl + language?.certificateUrl : undefined,
        })
      );

      return new AboutMe(
        new MultiLanguageText(
          aboutMeDTO.description.spanish,
          aboutMeDTO.description.english,
          aboutMeDTO.description.italian
        ),
        languages
      );
    } catch (error) {
      throw new CustomError(errorCodeEnum.SERVER_ERROR, "Server Error");
    }
  }

  async getAllTecnologies(): Promise<DataResponse<Tecnology[]>> {
    try {
      if (this.usedTecnologies.length === 0) {
        const url = baseUrl + "/api/tecnologies" + "?populate=*";
        const { data } = await axios.get(url);

        const usedTecnologies: Tecnology[] = data.data.map(
          (tecnologyDTO: any) =>
            new Tecnology(
              tecnologyDTO.attributes.name,
              tecnologyDTO.attributes.color,
              baseUrl + tecnologyDTO.attributes.icon.data.attributes.url
            )
        );

        this.usedTecnologies = usedTecnologies;
      }

      return this.usedTecnologies;
    } catch (error) {
      throw new CustomError(errorCodeEnum.SERVER_ERROR, "Server Error");
    }
  }

  async getAllProjects(): Promise<DataResponse<Project[]>> {
    try {
      const url = baseUrl + "/api/projects" + "?populate=*";
      const { data } = await axios.get(url);

      const allUsedTecnologies =
        (await this.getAllTecnologies()) as Tecnology[];

      const projectsDTO = data.data;

      const projects: Project[] = projectsDTO.map((project: any) => {
        const projectDTO = project.attributes;

        const usedTecnologiesName: string[] =
          project.attributes.used_tecnologies.data.map(
            (tecnology: any) => tecnology.attributes.name
          );

        let usedTecnologies: Tecnology[] = [];

        usedTecnologies = allUsedTecnologies.filter((tecnology) =>
          usedTecnologiesName.includes(tecnology.name)
        );

        return new Project(
          projectDTO.title,
          new MultiLanguageText(
            projectDTO.quick_description.spanish,
            projectDTO.quick_description.english,
            projectDTO.quick_description.italian
          ),
          new MultiLanguageText(
            projectDTO.description.spanish,
            projectDTO.description.english,
            projectDTO.description.italian
          ),
          baseUrl + projectDTO.frontImage.data.attributes.url,
          baseUrl + projectDTO.iconImage.data.attributes.url,
          usedTecnologies,
          projectDTO.repository_url,
          projectDTO.demo_url
        );
      });

      return projects;
    } catch (e: any) {
      throw new CustomError(errorCodeEnum.SERVER_ERROR, e.toString());
    }
  }

  async getSkills(): Promise<DataResponse<Skills>> {
    try {
      const url = baseUrl + "/api/skill" + "?populate=*";
      const { data } = await axios.get(url);
      const skillsDTO = data.data.attributes;

      return new Skills(
        new MultiLanguageText(
          skillsDTO.description.spanish,
          skillsDTO.description.english,
          skillsDTO.description.italian
        ),
        [
          baseUrl + skillsDTO.first_skill_icon.data.attributes.url,
          baseUrl + skillsDTO.second_skill_icon.data.attributes.url,
          baseUrl + skillsDTO.third_skill_icon.data.attributes.url,
          baseUrl + skillsDTO.four_skill_icon.data.attributes.url,
          baseUrl + skillsDTO.fifth_skill_icon.data.attributes.url,
          baseUrl + skillsDTO.sixth_skill_icon.data.attributes.url,
        ]
      );
    } catch (error) {
      throw new CustomError(errorCodeEnum.SERVER_ERROR, "Server Error");
    }
  }

  async getContactInfo(): Promise<DataResponse<ContactInfo>> {
    try {
      const url = baseUrl + "/api/my-info" + "?populate=*";
      const { data } = await axios.get(url);
      const myInfoDTO = data.data.attributes;
      return new ContactInfo(myInfoDTO.email, myInfoDTO.number);
    } catch (error) {
      throw new CustomError(errorCodeEnum.SERVER_ERROR, "Server Error");
    }
  }

  async sendEmail(newEmail: ContactEmail): Promise<DataResponse<void>> {
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        {
          to_name: 'Gaetano',
          from_name: newEmail.name,
          reply_to: newEmail.email,
          message: newEmail.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      );
    } catch (error) {
      console.log(error);
      throw new CustomError(errorCodeEnum.SERVER_ERROR, "Server Error");
    }
  }
}
