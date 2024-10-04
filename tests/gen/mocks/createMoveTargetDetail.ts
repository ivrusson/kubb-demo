import { createMoveTargetDescription } from "./createMoveTargetDescription";
import { createMoveSummary } from "./createMoveSummary";
import { createMoveTargetName } from "./createMoveTargetName";
import { faker } from "@faker-js/faker";
import type { MoveTargetDetailType } from "../ts/MoveTargetDetailType";


export function createMoveTargetDetail(data: NonNullable<Partial<MoveTargetDetailType>> = {}): NonNullable<MoveTargetDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "descriptions": faker.helpers.arrayElements([createMoveTargetDescription()]) as any, "moves": faker.helpers.arrayElements([createMoveSummary()]) as any, "names": faker.helpers.arrayElements([createMoveTargetName()]) as any },
        ...data
    };
}