import { faker } from "@faker-js/faker";
import { createPaginatedMachineSummaryList } from "../createPaginatedMachineSummaryList";
import type { MachineListQueryParamsType, MachineList200Type, MachineListQueryResponseType } from "../../ts/MachineListType";


export function createMachineListQueryParams(): NonNullable<MachineListQueryParamsType> {
    faker.seed([100]);
    return { "limit": faker.number.int(), "offset": faker.number.int(), "q": faker.string.alpha() };
}


export function createMachineList200(): NonNullable<MachineList200Type> {
    faker.seed([100]);
    return createPaginatedMachineSummaryList();
}


export function createMachineListQueryResponse(): NonNullable<MachineListQueryResponseType> {
    faker.seed([100]);
    return createPaginatedMachineSummaryList();
}