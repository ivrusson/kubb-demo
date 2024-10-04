import { createVersionName } from "./createVersionName";
import { createVersionGroupSummary } from "./createVersionGroupSummary";
import { faker } from "@faker-js/faker";
import type { VersionDetailType } from "../ts/VersionDetailType";

 /**
 * @description Should have a link to Version Group info but the Circular\ndependency and compilation order fight eachother and I\'m\nnot sure how to add anything other than a hyperlink
 */
export function createVersionDetail(data: NonNullable<Partial<VersionDetailType>> = {}): NonNullable<VersionDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "names": faker.helpers.arrayElements([createVersionName()]) as any, "version_group": createVersionGroupSummary() },
        ...data
    };
}