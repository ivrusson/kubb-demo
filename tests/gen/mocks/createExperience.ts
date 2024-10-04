import { faker } from "@faker-js/faker";
import type { ExperienceType } from "../ts/ExperienceType";


export function createExperience(data: NonNullable<Partial<ExperienceType>> = {}): NonNullable<ExperienceType> {
    faker.seed([100]);
    return {
        ...{ "level": faker.number.int(), "experience": faker.number.int() },
        ...data
    };
}