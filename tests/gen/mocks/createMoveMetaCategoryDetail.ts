import { createMoveMetaCategoryDescription } from "./createMoveMetaCategoryDescription";
import { faker } from "@faker-js/faker";
import type { MoveMetaCategoryDetailType } from "../ts/MoveMetaCategoryDetailType";


export function createMoveMetaCategoryDetail(data: NonNullable<Partial<MoveMetaCategoryDetailType>> = {}): NonNullable<MoveMetaCategoryDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "descriptions": faker.helpers.arrayElements([createMoveMetaCategoryDescription()]) as any, "moves": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any },
        ...data
    };
}