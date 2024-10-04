import type { EncounterConditionValueSummaryType } from "./EncounterConditionValueSummaryType";

 export type PaginatedEncounterConditionValueSummaryListType = {
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
    results?: EncounterConditionValueSummaryType[];
};