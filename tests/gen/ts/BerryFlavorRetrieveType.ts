import type { BerryFlavorDetailType } from "./BerryFlavorDetailType";

 export type BerryFlavorRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type BerryFlavorRetrieve200Type = BerryFlavorDetailType;
export type BerryFlavorRetrieveQueryResponseType = BerryFlavorDetailType;
export type BerryFlavorRetrieveTypeQuery = {
    Response: BerryFlavorRetrieveQueryResponseType;
    PathParams: BerryFlavorRetrievePathParamsType;
};