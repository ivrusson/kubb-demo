import type { ContestEffectDetailType } from "./ContestEffectDetailType";

 export type ContestEffectRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type ContestEffectRetrieve200Type = ContestEffectDetailType;
export type ContestEffectRetrieveQueryResponseType = ContestEffectDetailType;
export type ContestEffectRetrieveTypeQuery = {
    Response: ContestEffectRetrieveQueryResponseType;
    PathParams: ContestEffectRetrievePathParamsType;
};