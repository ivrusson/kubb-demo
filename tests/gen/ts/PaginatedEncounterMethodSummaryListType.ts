import type { EncounterMethodSummaryType } from "./EncounterMethodSummaryType";

 export type PaginatedEncounterMethodSummaryListType = {
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
    results?: EncounterMethodSummaryType[];
};