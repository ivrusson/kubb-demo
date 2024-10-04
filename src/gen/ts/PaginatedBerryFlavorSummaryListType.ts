import type { BerryFlavorSummaryType } from "./BerryFlavorSummaryType";

 export type PaginatedBerryFlavorSummaryListType = {
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
    results?: BerryFlavorSummaryType[];
};