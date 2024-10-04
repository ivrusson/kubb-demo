import type { PalParkAreaSummaryType } from "./PalParkAreaSummaryType";

 export type PaginatedPalParkAreaSummaryListType = {
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
    results?: PalParkAreaSummaryType[];
};