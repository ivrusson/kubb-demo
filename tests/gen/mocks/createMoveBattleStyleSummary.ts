import { faker } from "@faker-js/faker";
import type { MoveBattleStyleSummaryType } from "../ts/MoveBattleStyleSummaryType";


export function createMoveBattleStyleSummary(data: NonNullable<Partial<MoveBattleStyleSummaryType>> = {}): NonNullable<MoveBattleStyleSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}