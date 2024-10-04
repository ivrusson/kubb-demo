import type { PokedexDetailType } from "./PokedexDetailType";

 export type PokedexRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type PokedexRetrieve200Type = PokedexDetailType;
export type PokedexRetrieveQueryResponseType = PokedexDetailType;
export type PokedexRetrieveTypeQuery = {
    Response: PokedexRetrieveQueryResponseType;
    PathParams: PokedexRetrievePathParamsType;
};