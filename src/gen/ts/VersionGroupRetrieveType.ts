import type { VersionGroupDetailType } from "./VersionGroupDetailType";

 export type VersionGroupRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type VersionGroupRetrieve200Type = VersionGroupDetailType;
export type VersionGroupRetrieveQueryResponseType = VersionGroupDetailType;
export type VersionGroupRetrieveTypeQuery = {
    Response: VersionGroupRetrieveQueryResponseType;
    PathParams: VersionGroupRetrievePathParamsType;
};