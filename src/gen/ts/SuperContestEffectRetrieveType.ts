import type { SuperContestEffectDetailType } from "./SuperContestEffectDetailType";

 export type SuperContestEffectRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type SuperContestEffectRetrieve200Type = SuperContestEffectDetailType;
export type SuperContestEffectRetrieveQueryResponseType = SuperContestEffectDetailType;
export type SuperContestEffectRetrieveTypeQuery = {
    Response: SuperContestEffectRetrieveQueryResponseType;
    PathParams: SuperContestEffectRetrievePathParamsType;
};