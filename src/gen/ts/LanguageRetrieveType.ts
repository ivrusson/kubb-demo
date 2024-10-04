import type { LanguageDetailType } from "./LanguageDetailType";

 export type LanguageRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type LanguageRetrieve200Type = LanguageDetailType;
export type LanguageRetrieveQueryResponseType = LanguageDetailType;
export type LanguageRetrieveTypeQuery = {
    Response: LanguageRetrieveQueryResponseType;
    PathParams: LanguageRetrievePathParamsType;
};