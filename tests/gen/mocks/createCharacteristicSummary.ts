import { faker } from "@faker-js/faker";
import type { CharacteristicSummaryType } from "../ts/CharacteristicSummaryType";


export function createCharacteristicSummary(data: NonNullable<Partial<CharacteristicSummaryType>> = {}): NonNullable<CharacteristicSummaryType> {
    faker.seed([100]);
    return {
        ...{ "url": faker.internet.url() + "/" + faker.number.int(100) + "/" },
        ...data
    };
}