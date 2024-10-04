import { createItemAttributeDescription } from "./createItemAttributeDescription";
import { createItemAttributeName } from "./createItemAttributeName";
import { faker } from "@faker-js/faker";
import type { ItemAttributeDetailType } from "../ts/ItemAttributeDetailType";


export function createItemAttributeDetail(data: NonNullable<Partial<ItemAttributeDetailType>> = {}): NonNullable<ItemAttributeDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "descriptions": faker.helpers.arrayElements([createItemAttributeDescription()]) as any, "items": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any, "names": faker.helpers.arrayElements([createItemAttributeName()]) as any },
        ...data
    };
}