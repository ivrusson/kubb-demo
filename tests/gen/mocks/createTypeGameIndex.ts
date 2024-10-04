import { createGenerationSummary } from "./createGenerationSummary";
import { faker } from "@faker-js/faker";
import type { TypeGameIndexType } from "../ts/TypeGameIndexType";


export function createTypeGameIndex(data: NonNullable<Partial<TypeGameIndexType>> = {}): NonNullable<TypeGameIndexType> {
    faker.seed([100]);
    return {
        ...{ "game_index": faker.number.int(), "generation": createGenerationSummary() },
        ...data
    };
}