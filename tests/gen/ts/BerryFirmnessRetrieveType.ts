import type { BerryFirmnessDetailType } from "./BerryFirmnessDetailType";

 export type BerryFirmnessRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type BerryFirmnessRetrieve200Type = BerryFirmnessDetailType;
export type BerryFirmnessRetrieveQueryResponseType = BerryFirmnessDetailType;
export type BerryFirmnessRetrieveTypeQuery = {
    Response: BerryFirmnessRetrieveQueryResponseType;
    PathParams: BerryFirmnessRetrievePathParamsType;
};