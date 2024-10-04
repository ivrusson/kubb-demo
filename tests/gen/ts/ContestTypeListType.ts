import type { PaginatedContestTypeSummaryListType } from "./PaginatedContestTypeSummaryListType";

 export type ContestTypeListQueryParamsType = {
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
export type ContestTypeList200Type = PaginatedContestTypeSummaryListType;
export type ContestTypeListQueryResponseType = PaginatedContestTypeSummaryListType;
export type ContestTypeListTypeQuery = {
    Response: ContestTypeListQueryResponseType;
    QueryParams: ContestTypeListQueryParamsType;
};