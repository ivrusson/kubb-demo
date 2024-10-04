import type { EncounterConditionDetailType } from "./EncounterConditionDetailType";

 export type EncounterConditionRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type EncounterConditionRetrieve200Type = EncounterConditionDetailType;
export type EncounterConditionRetrieveQueryResponseType = EncounterConditionDetailType;
export type EncounterConditionRetrieveTypeQuery = {
    Response: EncounterConditionRetrieveQueryResponseType;
    PathParams: EncounterConditionRetrievePathParamsType;
};