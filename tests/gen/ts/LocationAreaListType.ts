import type { PaginatedLocationAreaSummaryListType } from "./PaginatedLocationAreaSummaryListType";

 export type LocationAreaListQueryParamsType = {
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
};
export type LocationAreaList200Type = PaginatedLocationAreaSummaryListType;
export type LocationAreaListQueryResponseType = PaginatedLocationAreaSummaryListType;
export type LocationAreaListTypeQuery = {
    Response: LocationAreaListQueryResponseType;
    QueryParams: LocationAreaListQueryParamsType;
};