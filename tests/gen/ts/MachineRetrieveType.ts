import type { MachineDetailType } from "./MachineDetailType";

 export type MachineRetrievePathParamsType = {
    /**
     * @description This parameter can be a string or an integer.
     * @type string
    */
    id: string;
};
export type MachineRetrieve200Type = MachineDetailType;
export type MachineRetrieveQueryResponseType = MachineDetailType;
export type MachineRetrieveTypeQuery = {
    Response: MachineRetrieveQueryResponseType;
    PathParams: MachineRetrievePathParamsType;
};