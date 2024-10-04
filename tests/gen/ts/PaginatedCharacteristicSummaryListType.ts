import type { CharacteristicSummaryType } from "./CharacteristicSummaryType";

 export type PaginatedCharacteristicSummaryListType = {
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
    results?: CharacteristicSummaryType[];
};