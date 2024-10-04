import type { EvolutionChainDetailType } from "./EvolutionChainDetailType";

 export type EvolutionChainRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type EvolutionChainRetrieve200Type = EvolutionChainDetailType;
export type EvolutionChainRetrieveQueryResponseType = EvolutionChainDetailType;
export type EvolutionChainRetrieveTypeQuery = {
    Response: EvolutionChainRetrieveQueryResponseType;
    PathParams: EvolutionChainRetrievePathParamsType;
};