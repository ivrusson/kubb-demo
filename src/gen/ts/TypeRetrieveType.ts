import type { TypeDetailType } from "./TypeDetailType";

 export type TypeRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type TypeRetrieve200Type = TypeDetailType;
export type TypeRetrieveQueryResponseType = TypeDetailType;
export type TypeRetrieveTypeQuery = {
    Response: TypeRetrieveQueryResponseType;
    PathParams: TypeRetrievePathParamsType;
};