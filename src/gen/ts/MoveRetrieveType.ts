import type { MoveDetailType } from "./MoveDetailType";

 export type MoveRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type MoveRetrieve200Type = MoveDetailType;
export type MoveRetrieveQueryResponseType = MoveDetailType;
export type MoveRetrieveTypeQuery = {
    Response: MoveRetrieveQueryResponseType;
    PathParams: MoveRetrievePathParamsType;
};