import type { ItemDetailType } from "./ItemDetailType";

 export type ItemRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type ItemRetrieve200Type = ItemDetailType;
export type ItemRetrieveQueryResponseType = ItemDetailType;
export type ItemRetrieveTypeQuery = {
    Response: ItemRetrieveQueryResponseType;
    PathParams: ItemRetrievePathParamsType;
};