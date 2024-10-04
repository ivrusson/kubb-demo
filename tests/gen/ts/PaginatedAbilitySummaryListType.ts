import type { AbilitySummaryType } from "./AbilitySummaryType";

 export type PaginatedAbilitySummaryListType = {
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
    results?: AbilitySummaryType[];
};