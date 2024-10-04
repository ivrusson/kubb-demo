import { createItemSummary } from "./createItemSummary";
import { createVersionGroupSummary } from "./createVersionGroupSummary";
import { createMoveSummary } from "./createMoveSummary";
import { faker } from "@faker-js/faker";
import type { MachineDetailType } from "../ts/MachineDetailType";


export function createMachineDetail(data: NonNullable<Partial<MachineDetailType>> = {}): NonNullable<MachineDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "item": createItemSummary(), "version_group": createVersionGroupSummary(), "move": createMoveSummary() },
        ...data
    };
}