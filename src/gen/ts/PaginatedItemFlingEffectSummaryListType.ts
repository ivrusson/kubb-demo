import type { ItemFlingEffectSummaryType } from "./ItemFlingEffectSummaryType";

 export type PaginatedItemFlingEffectSummaryListType = {
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
    results?: ItemFlingEffectSummaryType[];
};