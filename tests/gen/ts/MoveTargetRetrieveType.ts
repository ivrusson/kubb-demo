import type { MoveTargetDetailType } from "./MoveTargetDetailType";

 export type MoveTargetRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type MoveTargetRetrieve200Type = MoveTargetDetailType;
export type MoveTargetRetrieveQueryResponseType = MoveTargetDetailType;
export type MoveTargetRetrieveTypeQuery = {
    Response: MoveTargetRetrieveQueryResponseType;
    PathParams: MoveTargetRetrievePathParamsType;
};