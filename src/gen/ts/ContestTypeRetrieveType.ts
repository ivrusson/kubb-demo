import type { ContestTypeDetailType } from "./ContestTypeDetailType";

 export type ContestTypeRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type ContestTypeRetrieve200Type = ContestTypeDetailType;
export type ContestTypeRetrieveQueryResponseType = ContestTypeDetailType;
export type ContestTypeRetrieveTypeQuery = {
    Response: ContestTypeRetrieveQueryResponseType;
    PathParams: ContestTypeRetrievePathParamsType;
};