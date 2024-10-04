import type { ItemPocketDetailType } from "./ItemPocketDetailType";

 export type ItemPocketRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type ItemPocketRetrieve200Type = ItemPocketDetailType;
export type ItemPocketRetrieveQueryResponseType = ItemPocketDetailType;
export type ItemPocketRetrieveTypeQuery = {
    Response: ItemPocketRetrieveQueryResponseType;
    PathParams: ItemPocketRetrievePathParamsType;
};