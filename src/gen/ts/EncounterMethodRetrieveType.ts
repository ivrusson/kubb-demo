import type { EncounterMethodDetailType } from "./EncounterMethodDetailType";

 export type EncounterMethodRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type EncounterMethodRetrieve200Type = EncounterMethodDetailType;
export type EncounterMethodRetrieveQueryResponseType = EncounterMethodDetailType;
export type EncounterMethodRetrieveTypeQuery = {
    Response: EncounterMethodRetrieveQueryResponseType;
    PathParams: EncounterMethodRetrievePathParamsType;
};