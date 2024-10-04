import type { MoveBattleStyleSummaryType } from "./MoveBattleStyleSummaryType";

 export type PaginatedMoveBattleStyleSummaryListType = {
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
    results?: MoveBattleStyleSummaryType[];
};