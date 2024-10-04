import { faker } from "@faker-js/faker";
import type { MoveMetaAilmentSummaryType } from "../ts/MoveMetaAilmentSummaryType";


export function createMoveMetaAilmentSummary(data: NonNullable<Partial<MoveMetaAilmentSummaryType>> = {}): NonNullable<MoveMetaAilmentSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}