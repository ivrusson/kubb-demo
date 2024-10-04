import { faker } from "@faker-js/faker";
import type { MoveLearnMethodSummaryType } from "../ts/MoveLearnMethodSummaryType";


export function createMoveLearnMethodSummary(data: NonNullable<Partial<MoveLearnMethodSummaryType>> = {}): NonNullable<MoveLearnMethodSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}