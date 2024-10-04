import type { BerryDetailType } from "./BerryDetailType";

 export type BerryRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type BerryRetrieve200Type = BerryDetailType;
export type BerryRetrieveQueryResponseType = BerryDetailType;
export type BerryRetrieveTypeQuery = {
    Response: BerryRetrieveQueryResponseType;
    PathParams: BerryRetrievePathParamsType;
};