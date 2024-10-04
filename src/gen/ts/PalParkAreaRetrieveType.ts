import type { PalParkAreaDetailType } from "./PalParkAreaDetailType";

 export type PalParkAreaRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type PalParkAreaRetrieve200Type = PalParkAreaDetailType;
export type PalParkAreaRetrieveQueryResponseType = PalParkAreaDetailType;
export type PalParkAreaRetrieveTypeQuery = {
    Response: PalParkAreaRetrieveQueryResponseType;
    PathParams: PalParkAreaRetrievePathParamsType;
};