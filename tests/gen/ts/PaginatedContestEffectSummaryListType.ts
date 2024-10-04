import type { ContestEffectSummaryType } from "./ContestEffectSummaryType";

 export type PaginatedContestEffectSummaryListType = {
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
    results?: ContestEffectSummaryType[];
};