import type { EncounterConditionSummaryType } from "./EncounterConditionSummaryType";

 export type PaginatedEncounterConditionSummaryListType = {
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
    results?: EncounterConditionSummaryType[];
};