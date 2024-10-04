import { faker } from "@faker-js/faker";
import type { MoveTargetSummaryType } from "../ts/MoveTargetSummaryType";


export function createMoveTargetSummary(data: NonNullable<Partial<MoveTargetSummaryType>> = {}): NonNullable<MoveTargetSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}