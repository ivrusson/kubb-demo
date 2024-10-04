import type { RegionDetailType } from "./RegionDetailType";

 export type RegionRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type RegionRetrieve200Type = RegionDetailType;
export type RegionRetrieveQueryResponseType = RegionDetailType;
export type RegionRetrieveTypeQuery = {
    Response: RegionRetrieveQueryResponseType;
    PathParams: RegionRetrievePathParamsType;
};