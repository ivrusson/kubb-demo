import { createContestTypeSummary } from "./createContestTypeSummary";
import { createBerryFlavorName } from "./createBerryFlavorName";
import { faker } from "@faker-js/faker";
import type { BerryFlavorDetailType } from "../ts/BerryFlavorDetailType";


export function createBerryFlavorDetail(data: NonNullable<Partial<BerryFlavorDetailType>> = {}): NonNullable<BerryFlavorDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "berries": faker.helpers.arrayElements([{ "potency": faker.number.int(), "berry": { "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" } }]) as any, "contest_type": createContestTypeSummary(), "names": faker.helpers.arrayElements([createBerryFlavorName()]) as any },
        ...data
    };
}