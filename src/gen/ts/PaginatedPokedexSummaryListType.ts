import type { PokedexSummaryType } from "./PokedexSummaryType";

 export type PaginatedPokedexSummaryListType = {
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
    results?: PokedexSummaryType[];
};