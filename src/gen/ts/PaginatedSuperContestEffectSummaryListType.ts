import type { SuperContestEffectSummaryType } from "./SuperContestEffectSummaryType";

 export type PaginatedSuperContestEffectSummaryListType = {
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
    results?: SuperContestEffectSummaryType[];
};