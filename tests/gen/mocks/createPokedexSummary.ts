import { faker } from "@faker-js/faker";
import type { PokedexSummaryType } from "../ts/PokedexSummaryType";


export function createPokedexSummary(data: NonNullable<Partial<PokedexSummaryType>> = {}): NonNullable<PokedexSummaryType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}