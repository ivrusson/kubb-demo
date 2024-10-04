import { createMoveMetaAilmentName } from "./createMoveMetaAilmentName";
import { faker } from "@faker-js/faker";
import type { MoveMetaAilmentDetailType } from "../ts/MoveMetaAilmentDetailType";


export function createMoveMetaAilmentDetail(data: NonNullable<Partial<MoveMetaAilmentDetailType>> = {}): NonNullable<MoveMetaAilmentDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "moves": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any, "names": faker.helpers.arrayElements([createMoveMetaAilmentName()]) as any },
        ...data
    };
}