import type { PokemonDetailType } from "./PokemonDetailType";

 export type PokemonRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type PokemonRetrieve200Type = PokemonDetailType;
export type PokemonRetrieveQueryResponseType = PokemonDetailType;
export type PokemonRetrieveTypeQuery = {
    Response: PokemonRetrieveQueryResponseType;
    PathParams: PokemonRetrievePathParamsType;
};