import { createMoveDamageClassDescription } from "./createMoveDamageClassDescription";
import { createMoveSummary } from "./createMoveSummary";
import { createMoveDamageClassName } from "./createMoveDamageClassName";
import { faker } from "@faker-js/faker";
import type { MoveDamageClassDetailType } from "../ts/MoveDamageClassDetailType";


export function createMoveDamageClassDetail(data: NonNullable<Partial<MoveDamageClassDetailType>> = {}): NonNullable<MoveDamageClassDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "descriptions": faker.helpers.arrayElements([createMoveDamageClassDescription()]) as any, "moves": faker.helpers.arrayElements([createMoveSummary()]) as any, "names": faker.helpers.arrayElements([createMoveDamageClassName()]) as any },
        ...data
    };
}