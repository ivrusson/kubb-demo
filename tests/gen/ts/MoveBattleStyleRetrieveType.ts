import type { MoveBattleStyleDetailType } from "./MoveBattleStyleDetailType";

 export type MoveBattleStyleRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type MoveBattleStyleRetrieve200Type = MoveBattleStyleDetailType;
export type MoveBattleStyleRetrieveQueryResponseType = MoveBattleStyleDetailType;
export type MoveBattleStyleRetrieveTypeQuery = {
    Response: MoveBattleStyleRetrieveQueryResponseType;
    PathParams: MoveBattleStyleRetrievePathParamsType;
};