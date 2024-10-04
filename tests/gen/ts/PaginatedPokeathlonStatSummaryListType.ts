import type { PokeathlonStatSummaryType } from "./PokeathlonStatSummaryType";

 export type PaginatedPokeathlonStatSummaryListType = {
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
    results?: PokeathlonStatSummaryType[];
};