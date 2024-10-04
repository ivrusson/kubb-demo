import type { LocationAreaDetailType } from "./LocationAreaDetailType";

 export type LocationAreaRetrievePathParamsType = {
    /**
     * @description A unique integer value identifying this location area.
     * @type integer
    */
    id: number;
};
export type LocationAreaRetrieve200Type = LocationAreaDetailType;
export type LocationAreaRetrieveQueryResponseType = LocationAreaDetailType;
export type LocationAreaRetrieveTypeQuery = {
    Response: LocationAreaRetrieveQueryResponseType;
    PathParams: LocationAreaRetrievePathParamsType;
};