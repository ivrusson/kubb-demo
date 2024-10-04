import type { NatureSummaryType } from "./NatureSummaryType";

 export type PaginatedNatureSummaryListType = {
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
    results?: NatureSummaryType[];
};