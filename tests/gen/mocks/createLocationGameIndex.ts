import { createGenerationSummary } from "./createGenerationSummary";
import { faker } from "@faker-js/faker";
import type { LocationGameIndexType } from "../ts/LocationGameIndexType";


export function createLocationGameIndex(data: NonNullable<Partial<LocationGameIndexType>> = {}): NonNullable<LocationGameIndexType> {
    faker.seed([100]);
    return {
        ...{ "game_index": faker.number.int(), "generation": createGenerationSummary() },
        ...data
    };
}