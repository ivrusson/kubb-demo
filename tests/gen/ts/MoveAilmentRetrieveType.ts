import type { MoveMetaAilmentDetailType } from "./MoveMetaAilmentDetailType";

 export type MoveAilmentRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type MoveAilmentRetrieve200Type = MoveMetaAilmentDetailType;
export type MoveAilmentRetrieveQueryResponseType = MoveMetaAilmentDetailType;
export type MoveAilmentRetrieveTypeQuery = {
    Response: MoveAilmentRetrieveQueryResponseType;
    PathParams: MoveAilmentRetrievePathParamsType;
};