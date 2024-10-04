import { createEncounterConditionValueSummary } from "./createEncounterConditionValueSummary";
import { faker } from "@faker-js/faker";
import type { PaginatedEncounterConditionValueSummaryListType } from "../ts/PaginatedEncounterConditionValueSummaryListType";


export function createPaginatedEncounterConditionValueSummaryList(data: NonNullable<Partial<PaginatedEncounterConditionValueSummaryListType>> = {}): NonNullable<PaginatedEncounterConditionValueSummaryListType> {
    faker.seed([100]);
    return {
        ...{ "count": faker.number.int(), "next": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "previous": faker.helpers.arrayElement<any>([faker.string.alpha(), faker.internet.url()]), "results": faker.helpers.arrayElements([createEncounterConditionValueSummary()]) as any },
        ...data
    };
}