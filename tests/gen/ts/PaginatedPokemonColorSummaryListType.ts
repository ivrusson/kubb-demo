import type { PokemonColorSummaryType } from "./PokemonColorSummaryType";

 export type PaginatedPokemonColorSummaryListType = {
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
    results?: PokemonColorSummaryType[];
};