import { createEvolutionTriggerName } from "./createEvolutionTriggerName";
import { faker } from "@faker-js/faker";
import type { EvolutionTriggerDetailType } from "../ts/EvolutionTriggerDetailType";


export function createEvolutionTriggerDetail(data: NonNullable<Partial<EvolutionTriggerDetailType>> = {}): NonNullable<EvolutionTriggerDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "names": faker.helpers.arrayElements([createEvolutionTriggerName()]) as any, "pokemon_species": faker.helpers.arrayElements([{ "name": faker.string.alpha(), "url": faker.internet.url() + "/" + faker.number.int(100) + "/" }]) as any },
        ...data
    };
}