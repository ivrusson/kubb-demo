import type { EvolutionTriggerDetailType } from "./EvolutionTriggerDetailType";

 export type EvolutionTriggerRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type EvolutionTriggerRetrieve200Type = EvolutionTriggerDetailType;
export type EvolutionTriggerRetrieveQueryResponseType = EvolutionTriggerDetailType;
export type EvolutionTriggerRetrieveTypeQuery = {
    Response: EvolutionTriggerRetrieveQueryResponseType;
    PathParams: EvolutionTriggerRetrievePathParamsType;
};