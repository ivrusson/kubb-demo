import { faker } from "@faker-js/faker";
import type { PokeathlonStatSummaryType } from "../ts/PokeathlonStatSummaryType";


export function createPokeathlonStatSummary(data: NonNullable<Partial<PokeathlonStatSummaryType>> = {}): NonNullable<PokeathlonStatSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}