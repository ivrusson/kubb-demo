import { createBerryFlavorSummary } from "./createBerryFlavorSummary";
import { createContestTypeName } from "./createContestTypeName";
import { faker } from "@faker-js/faker";
import type { ContestTypeDetailType } from "../ts/ContestTypeDetailType";


export function createContestTypeDetail(data: NonNullable<Partial<ContestTypeDetailType>> = {}): NonNullable<ContestTypeDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "berry_flavor": Object.assign({}, createBerryFlavorSummary()), "names": faker.helpers.arrayElements([createContestTypeName()]) as any },
        ...data
    };
}