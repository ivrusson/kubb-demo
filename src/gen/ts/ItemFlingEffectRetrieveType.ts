import type { ItemFlingEffectDetailType } from "./ItemFlingEffectDetailType";

 export type ItemFlingEffectRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type ItemFlingEffectRetrieve200Type = ItemFlingEffectDetailType;
export type ItemFlingEffectRetrieveQueryResponseType = ItemFlingEffectDetailType;
export type ItemFlingEffectRetrieveTypeQuery = {
    Response: ItemFlingEffectRetrieveQueryResponseType;
    PathParams: ItemFlingEffectRetrievePathParamsType;
};