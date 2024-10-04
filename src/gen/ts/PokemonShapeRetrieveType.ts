import type { PokemonShapeDetailType } from "./PokemonShapeDetailType";

 export type PokemonShapeRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type PokemonShapeRetrieve200Type = PokemonShapeDetailType;
export type PokemonShapeRetrieveQueryResponseType = PokemonShapeDetailType;
export type PokemonShapeRetrieveTypeQuery = {
    Response: PokemonShapeRetrieveQueryResponseType;
    PathParams: PokemonShapeRetrievePathParamsType;
};