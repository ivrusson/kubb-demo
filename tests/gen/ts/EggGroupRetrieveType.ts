import type { EggGroupDetailType } from "./EggGroupDetailType";

 export type EggGroupRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type EggGroupRetrieve200Type = EggGroupDetailType;
export type EggGroupRetrieveQueryResponseType = EggGroupDetailType;
export type EggGroupRetrieveTypeQuery = {
    Response: EggGroupRetrieveQueryResponseType;
    PathParams: EggGroupRetrievePathParamsType;
};