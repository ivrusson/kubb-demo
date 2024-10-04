import { createEncounterConditionSummary } from "./createEncounterConditionSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedEncounterConditionSummaryListType } from "../ts/PaginatedEncounterConditionSummaryListType";


export function createPaginatedEncounterConditionSummaryList(data: NonNullable<Partial<PaginatedEncounterConditionSummaryListType>> = {}): NonNullable<PaginatedEncounterConditionSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createEncounterConditionSummary()]) as any },
        ...data
    };
}