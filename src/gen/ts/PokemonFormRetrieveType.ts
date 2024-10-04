import type { PokemonFormDetailType } from "./PokemonFormDetailType";

 export type PokemonFormRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type PokemonFormRetrieve200Type = PokemonFormDetailType;
export type PokemonFormRetrieveQueryResponseType = PokemonFormDetailType;
export type PokemonFormRetrieveTypeQuery = {
    Response: PokemonFormRetrieveQueryResponseType;
    PathParams: PokemonFormRetrievePathParamsType;
};