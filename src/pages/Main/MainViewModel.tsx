import { useEffect, useState } from "react";
import { errorCodeEnum } from 'core';
import { useQuery } from '@tanstack/react-query'

import {
  PersonalInfo,
  AboutMe,
  Skills,
  Project,
  Job,
  Tecnology,
  ContactInfo,
  CustomError,
} from "core";

import { intercatorUseCase } from "App";

const jobs = [
  new Job(
    "hattrick",
    new Date("03-05-2022"),
    true,
    [new Tecnology("React", "blue", "")],
    "FullStack developer"
  ),
];

const fetchProfileData = async () => {
  try {
    const personalInfoRes = await intercatorUseCase.getPersonalInfo() as PersonalInfo;
    const aboutMeRes = await intercatorUseCase.getAboutMe() as AboutMe;
    const skillsRes = await intercatorUseCase.getSkills() as Skills;
    const projectsRes = await intercatorUseCase.getAllProject() as Project[];
    const contactInfoRes = await intercatorUseCase.getContactInfo() as ContactInfo;
  
    return {
      personalInfo: personalInfoRes,
      aboutMe: aboutMeRes,
      skills: skillsRes,
      projects: projectsRes,
      contactInfo: contactInfoRes
    }
  } catch (err) {
    throw err
  }

}

export interface ViewInterface {
  data: {
    personalInfo: PersonalInfo;
    aboutMe: AboutMe;
    skills: Skills;
    projects: Project[];
    // experience: Job[];
    contactInfo: ContactInfo;
  } | null;
  error: CustomError | null;
  isLoading: boolean;
}

export default function MainViewModel(): ViewInterface {
  const { data, isLoading, error } = useQuery<any, CustomError>(['profileData'], () => fetchProfileData())

  const returnInfo: ViewInterface = {
    data: null,
    error: null,
    isLoading: isLoading
  }

  if(data){
    returnInfo.data = {
      personalInfo: data.personalInfo,
      aboutMe: data.aboutMe,
      skills: data.skills,
      projects: data.projects,
      contactInfo: data.contactInfo
    }
  }

  if(error){
    returnInfo.error = error;
  }

  return returnInfo;
}
