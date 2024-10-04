import type { EvolutionChainSummaryType } from "./EvolutionChainSummaryType";

 export type PaginatedEvolutionChainSummaryListType = {
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
    results?: EvolutionChainSummaryType[];
};