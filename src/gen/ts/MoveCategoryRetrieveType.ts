import type { MoveMetaCategoryDetailType } from "./MoveMetaCategoryDetailType";

 export type MoveCategoryRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type MoveCategoryRetrieve200Type = MoveMetaCategoryDetailType;
export type MoveCategoryRetrieveQueryResponseType = MoveMetaCategoryDetailType;
export type MoveCategoryRetrieveTypeQuery = {
    Response: MoveCategoryRetrieveQueryResponseType;
    PathParams: MoveCategoryRetrievePathParamsType;
};