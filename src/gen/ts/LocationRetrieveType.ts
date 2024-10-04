import type { LocationDetailType } from "./LocationDetailType";

 export type LocationRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type LocationRetrieve200Type = LocationDetailType;
export type LocationRetrieveQueryResponseType = LocationDetailType;
export type LocationRetrieveTypeQuery = {
    Response: LocationRetrieveQueryResponseType;
    PathParams: LocationRetrievePathParamsType;
};