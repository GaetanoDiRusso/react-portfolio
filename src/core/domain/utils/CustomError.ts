export enum errorCodeEnum {
    UNATORIZED = 401,
    NOT_FOUND = 404,
    SERVER_ERROR = 500
}

export class CustomError extends Error {
    code: errorCodeEnum;
    description: string;

    constructor(code: errorCodeEnum, description: string){
        super(description);
        this.code = code;
        this.description = description;
    }
}

