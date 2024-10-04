import { faker } from "@faker-js/faker";
import type { EvolutionChainSummaryType } from "../ts/EvolutionChainSummaryType";


export function createEvolutionChainSummary(data: NonNullable<Partial<EvolutionChainSummaryType>> = {}): NonNullable<EvolutionChainSummaryType> {
    faker.seed([100]);
    return {
        ...{ "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}