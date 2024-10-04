import { createGenerationSummary } from "./createGenerationSummary";
import { createVersionSummary } from "./createVersionSummary";
import { faker } from "@faker-js/faker";
import type { VersionGroupDetailType } from "../ts/VersionGroupDetailType";


export function createVersionGroupDetail(data: NonNullable<Partial<VersionGroupDetailType>> = {}): NonNullable<VersionGroupDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "order": faker.number.int(), "generation": createGenerationSummary(), "move_learn_methods": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any, "pokedexes": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any, "regions": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any, "versions": faker.helpers.arrayElements([createVersionSummary()]) as any },
        ...data
    };
}