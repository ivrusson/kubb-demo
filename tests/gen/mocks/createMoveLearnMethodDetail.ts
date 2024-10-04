import { createMoveLearnMethodName } from "./createMoveLearnMethodName";
import { createMoveLearnMethodDescription } from "./createMoveLearnMethodDescription";
import { faker } from "@faker-js/faker";
import type { MoveLearnMethodDetailType } from "../ts/MoveLearnMethodDetailType";


export function createMoveLearnMethodDetail(data: NonNullable<Partial<MoveLearnMethodDetailType>> = {}): NonNullable<MoveLearnMethodDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "names": faker.helpers.arrayElements([createMoveLearnMethodName()]) as any, "descriptions": faker.helpers.arrayElements([createMoveLearnMethodDescription()]) as any, "version_groups": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any },
        ...data
    };
}