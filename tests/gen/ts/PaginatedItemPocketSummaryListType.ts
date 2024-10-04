import type { ItemPocketSummaryType } from "./ItemPocketSummaryType";

 export type PaginatedItemPocketSummaryListType = {
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
    results?: ItemPocketSummaryType[];
};