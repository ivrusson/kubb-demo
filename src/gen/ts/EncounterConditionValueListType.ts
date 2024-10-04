import type { PaginatedEncounterConditionValueSummaryListType } from "./PaginatedEncounterConditionValueSummaryListType";

 export type EncounterConditionValueListQueryParamsType = {
    /**
     * @description Number of results to return per page.
     * @type integer | undefined
    */
    limit?: number;
    /**
     * @description The initial index from which to return the results.
     * @type integer | undefined
    */
    offset?: number;
    /**
     * @description > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property.
     * @type string | undefined
    */
    q?: string;
};
export type EncounterConditionValueList200Type = PaginatedEncounterConditionValueSummaryListType;
export type EncounterConditionValueListQueryResponseType = PaginatedEncounterConditionValueSummaryListType;
export type EncounterConditionValueListTypeQuery = {
    Response: EncounterConditionValueListQueryResponseType;
    QueryParams: EncounterConditionValueListQueryParamsType;
};