import type { MoveDamageClassSummaryType } from "./MoveDamageClassSummaryType";

 export type PaginatedMoveDamageClassSummaryListType = {
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
    results?: MoveDamageClassSummaryType[];
};