import { createLanguageSummary } from "./createLanguageSummary";
import { faker } from "@faker-js/faker";
import type { MoveMetaAilmentNameType } from "../ts/MoveMetaAilmentNameType";


export function createMoveMetaAilmentName(data: NonNullable<Partial<MoveMetaAilmentNameType>> = {}): NonNullable<MoveMetaAilmentNameType> {
    faker.seed([100]);
    return {
        ...{ "name": faker.string.alpha(), "language": createLanguageSummary() },
        ...data
    };
}