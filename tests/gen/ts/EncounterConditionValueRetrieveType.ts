import type { EncounterConditionValueDetailType } from "./EncounterConditionValueDetailType";

 export type EncounterConditionValueRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type EncounterConditionValueRetrieve200Type = EncounterConditionValueDetailType;
export type EncounterConditionValueRetrieveQueryResponseType = EncounterConditionValueDetailType;
export type EncounterConditionValueRetrieveTypeQuery = {
    Response: EncounterConditionValueRetrieveQueryResponseType;
    PathParams: EncounterConditionValueRetrievePathParamsType;
};