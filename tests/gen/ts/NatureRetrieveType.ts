import type { NatureDetailType } from "./NatureDetailType";

 export type NatureRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type NatureRetrieve200Type = NatureDetailType;
export type NatureRetrieveQueryResponseType = NatureDetailType;
export type NatureRetrieveTypeQuery = {
    Response: NatureRetrieveQueryResponseType;
    PathParams: NatureRetrievePathParamsType;
};