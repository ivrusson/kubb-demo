import type { VersionDetailType } from "./VersionDetailType";

 export type VersionRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type VersionRetrieve200Type = VersionDetailType;
export type VersionRetrieveQueryResponseType = VersionDetailType;
export type VersionRetrieveTypeQuery = {
    Response: VersionRetrieveQueryResponseType;
    PathParams: VersionRetrievePathParamsType;
};