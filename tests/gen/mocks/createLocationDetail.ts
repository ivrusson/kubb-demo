import { createRegionSummary } from "./createRegionSummary";
import { createLocationName } from "./createLocationName";
import { createLocationGameIndex } from "./createLocationGameIndex";
import { createLocationAreaSummary } from "./createLocationAreaSummary";
import { faker } from "@faker-js/faker";
import type { LocationDetailType } from "../ts/LocationDetailType";


export function createLocationDetail(data: NonNullable<Partial<LocationDetailType>> = {}): NonNullable<LocationDetailType> {
    faker.seed([100]);
    return {
        ...{ "id": faker.number.int(), "name": faker.string.alpha(), "region": createRegionSummary(), "names": faker.helpers.arrayElements([createLocationName()]) as any, "game_indices": faker.helpers.arrayElements([createLocationGameIndex()]) as any, "areas": faker.helpers.arrayElements([createLocationAreaSummary()]) as any },
        ...data
    };
}