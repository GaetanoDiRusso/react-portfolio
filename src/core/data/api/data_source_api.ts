// import { IDataSourceApi } from '../index'

// const fakeAboutMe = "Hello! My name is Gaetano, I'm a software developer and programmer. I was born in Uruguay, I'm currently studying software engineering at the UDELAR university. I studied at the Scuola Italiana di Montevideo, where I learned how to speak italian and english, and also a lot of mathematics."
// const fakeLanguages = [
//     {
//         title: "English",
//     },
//     {
//         title: "Italian",
//     },
//     {
//         title: "Spanish",
//     }
// ]

// export class FakeDataSourceApi implements IDataSourceApi {
    
//     async fetchTitle(): Promise<fakeTitleDTO> {
//         return new Promise<fakeTitleDTO>((resolve, reject) => {
//             setTimeout(() => {
//                 resolve({name: 'Gaetano Di Russo', position: 'Software Developer'});
//                 reject(() => {throw new Error()});
//             })
//         })
//     }

//     async fetchAboutMe(): Promise<fakeAboutMeDTO> {
//         return new Promise<fakeAboutMeDTO>((resolve, reject) => {
//             setTimeout(() => {
//                 resolve({myInfo: fakeAboutMe, languages: fakeLanguages});
//                 reject(() => {throw new Error()});
//             })
//         })
//     }

//     async fetchAllTecnologies(): Promise<fakeTecnology[]> {
//         return new Promise<fakeAboutMeDTO>((resolve, reject) => {
//             setTimeout(() => {
//                 resolve({myInfo: fakeAboutMe, languages: fakeLanguages});
//                 reject(() => {throw new Error()});
//             })
//         })
//     }

//     async fetchAllProjects(): Promise<fakeAllProjectsDTO> {
//         return new Promise<fakeAllProjectsDTO>((resolve, reject) => {
//             setTimeout(() => {
//                 resolve({description: fakeAllProjectsDescription: });
//                 reject(() => {throw new Error()});
//             })
//         })
//     }
// }

// export type fakeTitleDTO = {
//     name: string;
//     position: string;
// }

// export type fakeAboutMeDTO = {
//     myInfo: string;
//     languages: {title: string, certificateUrl?: string}[]
// }

// export type fakeTecnology = {
//     name: string,
//     iconUrl: string,
// }

// export type fakeProject = {
//     title: string,
//     usedTecnologies: fakeTecnology[],
//     description: string,
//     frontImgUrl: string,
//     imagesUrl: string[],
//     repositoryUrl: string,
//     demoUrl?: string,
// }

// export type fakeAllProjectsDTO = {
//     description?: string;
//     projects: fakeProject[]
// }

// const fakeAllProjectsDescription = 'I like to make projects'

export {}