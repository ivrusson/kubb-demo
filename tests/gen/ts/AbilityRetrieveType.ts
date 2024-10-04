import type { AbilityDetailType } from "./AbilityDetailType";

 export type AbilityRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type AbilityRetrieve200Type = AbilityDetailType;
export type AbilityRetrieveQueryResponseType = AbilityDetailType;
export type AbilityRetrieveTypeQuery = {
    Response: AbilityRetrieveQueryResponseType;
    PathParams: AbilityRetrievePathParamsType;
};