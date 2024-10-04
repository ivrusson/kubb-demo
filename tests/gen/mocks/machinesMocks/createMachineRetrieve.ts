import { faker } from "@faker-js/faker";
import { createMachineDetail } from "../createMachineDetail";
import type { MachineRetrievePathParamsType, MachineRetrieve200Type, MachineRetrieveQueryResponseType } from "../../ts/MachineRetrieveType";


export function createMachineRetrievePathParams(): NonNullable<MachineRetrievePathParamsType> {
    faker.seed([100]);
    return { "id": faker.string.alpha() };
}


export function createMachineRetrieve200(): NonNullable<MachineRetrieve200Type> {
    faker.seed([100]);
    return createMachineDetail();
}


export function createMachineRetrieveQueryResponse(): NonNullable<MachineRetrieveQueryResponseType> {
    faker.seed([100]);
    return createMachineDetail();
}