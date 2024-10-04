import type { EggGroupSummaryType } from "./EggGroupSummaryType";

 export type PaginatedEggGroupSummaryListType = {
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
    results?: EggGroupSummaryType[];
};