import { createMoveBattleStyleName } from "./createMoveBattleStyleName";
import { faker } from "@faker-js/faker";
import type { MoveBattleStyleDetailType } from "../ts/MoveBattleStyleDetailType";


export function createMoveBattleStyleDetail(data: NonNullable<Partial<MoveBattleStyleDetailType>> = {}): NonNullable<MoveBattleStyleDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "names": faker.helpers.arrayElements([createMoveBattleStyleName()]) as any },
        ...data
    };
}