import type { PokemonHabitatDetailType } from "./PokemonHabitatDetailType";

 export type PokemonHabitatRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type PokemonHabitatRetrieve200Type = PokemonHabitatDetailType;
export type PokemonHabitatRetrieveQueryResponseType = PokemonHabitatDetailType;
export type PokemonHabitatRetrieveTypeQuery = {
    Response: PokemonHabitatRetrieveQueryResponseType;
    PathParams: PokemonHabitatRetrievePathParamsType;
};