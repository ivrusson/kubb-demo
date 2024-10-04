import type { MoveLearnMethodDetailType } from "./MoveLearnMethodDetailType";

 export type MoveLearnMethodRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type MoveLearnMethodRetrieve200Type = MoveLearnMethodDetailType;
export type MoveLearnMethodRetrieveQueryResponseType = MoveLearnMethodDetailType;
export type MoveLearnMethodRetrieveTypeQuery = {
    Response: MoveLearnMethodRetrieveQueryResponseType;
    PathParams: MoveLearnMethodRetrievePathParamsType;
};