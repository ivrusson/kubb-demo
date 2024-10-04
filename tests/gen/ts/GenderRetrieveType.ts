import type { GenderDetailType } from "./GenderDetailType";

 export type GenderRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type GenderRetrieve200Type = GenderDetailType;
export type GenderRetrieveQueryResponseType = GenderDetailType;
export type GenderRetrieveTypeQuery = {
    Response: GenderRetrieveQueryResponseType;
    PathParams: GenderRetrievePathParamsType;
};