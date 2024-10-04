import type { ContestTypeSummaryType } from "./ContestTypeSummaryType";

 export type PaginatedContestTypeSummaryListType = {
    /**
     * @type integer | undefined
    */
    count?: number;
    /**
     * @type string, uri
    */
    next?: string | null;
    /**
     * @type string, uri
    */
    previous?: string | null;
    /**
     * @type array | undefined
    */
    results?: ContestTypeSummaryType[];
};