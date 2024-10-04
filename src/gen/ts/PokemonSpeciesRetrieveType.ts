import type { PokemonSpeciesDetailType } from "./PokemonSpeciesDetailType";

 export type PokemonSpeciesRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type PokemonSpeciesRetrieve200Type = PokemonSpeciesDetailType;
export type PokemonSpeciesRetrieveQueryResponseType = PokemonSpeciesDetailType;
export type PokemonSpeciesRetrieveTypeQuery = {
    Response: PokemonSpeciesRetrieveQueryResponseType;
    PathParams: PokemonSpeciesRetrievePathParamsType;
};