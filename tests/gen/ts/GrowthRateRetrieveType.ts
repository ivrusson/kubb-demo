import type { GrowthRateDetailType } from "./GrowthRateDetailType";

 export type GrowthRateRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type GrowthRateRetrieve200Type = GrowthRateDetailType;
export type GrowthRateRetrieveQueryResponseType = GrowthRateDetailType;
export type GrowthRateRetrieveTypeQuery = {
    Response: GrowthRateRetrieveQueryResponseType;
    PathParams: GrowthRateRetrievePathParamsType;
};