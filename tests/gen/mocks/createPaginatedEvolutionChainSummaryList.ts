import { createEvolutionChainSummary } from "./createEvolutionChainSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedEvolutionChainSummaryListType } from "../ts/PaginatedEvolutionChainSummaryListType";


export function createPaginatedEvolutionChainSummaryList(data: NonNullable<Partial<PaginatedEvolutionChainSummaryListType>> = {}): NonNullable<PaginatedEvolutionChainSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createEvolutionChainSummary()]) as any },
        ...data
    };
}