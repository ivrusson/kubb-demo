import type { StatDetailType } from "./StatDetailType";

 export type StatRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type StatRetrieve200Type = StatDetailType;
export type StatRetrieveQueryResponseType = StatDetailType;
export type StatRetrieveTypeQuery = {
    Response: StatRetrieveQueryResponseType;
    PathParams: StatRetrievePathParamsType;
};