import { createEncounterMethodName } from "./createEncounterMethodName";
import { faker } from "@faker-js/faker";
import type { EncounterMethodDetailType } from "../ts/EncounterMethodDetailType";


export function createEncounterMethodDetail(data: NonNullable<Partial<EncounterMethodDetailType>> = {}): NonNullable<EncounterMethodDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "order": faker.number.int(), "names": faker.helpers.arrayElements([createEncounterMethodName()]) as any },
        ...data
    };
}