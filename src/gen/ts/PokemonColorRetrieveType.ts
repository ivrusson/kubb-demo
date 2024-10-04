import type { PokemonColorDetailType } from "./PokemonColorDetailType";

 export type PokemonColorRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type PokemonColorRetrieve200Type = PokemonColorDetailType;
export type PokemonColorRetrieveQueryResponseType = PokemonColorDetailType;
export type PokemonColorRetrieveTypeQuery = {
    Response: PokemonColorRetrieveQueryResponseType;
    PathParams: PokemonColorRetrievePathParamsType;
};