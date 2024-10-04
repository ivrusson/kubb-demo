import type { GenerationDetailType } from "./GenerationDetailType";

 export type GenerationRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type GenerationRetrieve200Type = GenerationDetailType;
export type GenerationRetrieveQueryResponseType = GenerationDetailType;
export type GenerationRetrieveTypeQuery = {
    Response: GenerationRetrieveQueryResponseType;
    PathParams: GenerationRetrievePathParamsType;
};