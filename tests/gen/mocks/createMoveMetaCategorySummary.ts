import { faker } from "@faker-js/faker";
import type { MoveMetaCategorySummaryType } from "../ts/MoveMetaCategorySummaryType";


export function createMoveMetaCategorySummary(data: NonNullable<Partial<MoveMetaCategorySummaryType>> = {}): NonNullable<MoveMetaCategorySummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}