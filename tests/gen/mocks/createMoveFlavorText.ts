import { createLanguageSummary } from "./createLanguageSummary";
import { createVersionGroupSummary } from "./createVersionGroupSummary";
import { faker } from "@faker-js/faker";
import type { MoveFlavorTextType } from "../ts/MoveFlavorTextType";


export function createMoveFlavorText(data: NonNullable<Partial<MoveFlavorTextType>> = {}): NonNullable<MoveFlavorTextType> {
    faker.seed([100]);
    return {
        ...{ "flavor_text": faker.string.alpha(), "language": createLanguageSummary(), "version_group": createVersionGroupSummary() },
        ...data
    };
}