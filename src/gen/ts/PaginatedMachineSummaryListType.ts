import type { MachineSummaryType } from "./MachineSummaryType";

 export type PaginatedMachineSummaryListType = {
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
    results?: MachineSummaryType[];
};