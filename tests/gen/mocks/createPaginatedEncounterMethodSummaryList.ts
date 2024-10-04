import { createEncounterMethodSummary } from "./createEncounterMethodSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedEncounterMethodSummaryListType } from "../ts/PaginatedEncounterMethodSummaryListType";


export function createPaginatedEncounterMethodSummaryList(data: NonNullable<Partial<PaginatedEncounterMethodSummaryListType>> = {}): NonNullable<PaginatedEncounterMethodSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createEncounterMethodSummary()]) as any },
        ...data
    };
}