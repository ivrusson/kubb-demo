import { createGenerationSummary } from "./createGenerationSummary";
import { faker } from "@faker-js/faker";
import type { ItemGameIndexType } from "../ts/ItemGameIndexType";


export function createItemGameIndex(data: NonNullable<Partial<ItemGameIndexType>> = {}): NonNullable<ItemGameIndexType> {
    faker.seed([100]);
    return {
        ...{ "game_index": faker.number.int(), "generation": createGenerationSummary() },
        ...data
    };
}