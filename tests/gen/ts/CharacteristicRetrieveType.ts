import type { CharacteristicDetailType } from "./CharacteristicDetailType";

 export type CharacteristicRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type CharacteristicRetrieve200Type = CharacteristicDetailType;
export type CharacteristicRetrieveQueryResponseType = CharacteristicDetailType;
export type CharacteristicRetrieveTypeQuery = {
    Response: CharacteristicRetrieveQueryResponseType;
    PathParams: CharacteristicRetrievePathParamsType;
};