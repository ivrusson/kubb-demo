import type { ItemCategoryDetailType } from "./ItemCategoryDetailType";

 export type ItemCategoryRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type ItemCategoryRetrieve200Type = ItemCategoryDetailType;
export type ItemCategoryRetrieveQueryResponseType = ItemCategoryDetailType;
export type ItemCategoryRetrieveTypeQuery = {
    Response: ItemCategoryRetrieveQueryResponseType;
    PathParams: ItemCategoryRetrievePathParamsType;
};