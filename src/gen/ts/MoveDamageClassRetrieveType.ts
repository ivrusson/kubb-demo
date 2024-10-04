import type { MoveDamageClassDetailType } from "./MoveDamageClassDetailType";

 export type MoveDamageClassRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type MoveDamageClassRetrieve200Type = MoveDamageClassDetailType;
export type MoveDamageClassRetrieveQueryResponseType = MoveDamageClassDetailType;
export type MoveDamageClassRetrieveTypeQuery = {
    Response: MoveDamageClassRetrieveQueryResponseType;
    PathParams: MoveDamageClassRetrievePathParamsType;
};