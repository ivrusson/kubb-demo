import { createLanguageName } from "./createLanguageName";
import { faker } from "@faker-js/faker";
import type { LanguageDetailType } from "../ts/LanguageDetailType";


export function createLanguageDetail(data: NonNullable<Partial<LanguageDetailType>> = {}): NonNullable<LanguageDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "official": faker.datatype.boolean(), "iso639": faker.string.alpha(), "iso3166": faker.string.alpha(), "names": faker.helpers.arrayElements([createLanguageName()]) as any },
        ...data
    };
}