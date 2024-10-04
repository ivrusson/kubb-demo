import type { BerrySummaryType } from "./BerrySummaryType";

 export type PaginatedBerrySummaryListType = {
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
    results?: BerrySummaryType[];
};