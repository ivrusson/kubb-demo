import type { ItemCategorySummaryType } from "./ItemCategorySummaryType";

 export type PaginatedItemCategorySummaryListType = {
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
    results?: ItemCategorySummaryType[];
};