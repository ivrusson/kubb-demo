import type { ItemAttributeDetailType } from "./ItemAttributeDetailType";

 export type ItemAttributeRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type ItemAttributeRetrieve200Type = ItemAttributeDetailType;
export type ItemAttributeRetrieveQueryResponseType = ItemAttributeDetailType;
export type ItemAttributeRetrieveTypeQuery = {
    Response: ItemAttributeRetrieveQueryResponseType;
    PathParams: ItemAttributeRetrievePathParamsType;
};