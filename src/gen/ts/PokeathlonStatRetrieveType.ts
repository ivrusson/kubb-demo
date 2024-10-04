import type { PokeathlonStatDetailType } from "./PokeathlonStatDetailType";

 export type PokeathlonStatRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type PokeathlonStatRetrieve200Type = PokeathlonStatDetailType;
export type PokeathlonStatRetrieveQueryResponseType = PokeathlonStatDetailType;
export type PokeathlonStatRetrieveTypeQuery = {
    Response: PokeathlonStatRetrieveQueryResponseType;
    PathParams: PokeathlonStatRetrievePathParamsType;
};