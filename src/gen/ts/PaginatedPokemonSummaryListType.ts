import type { PokemonSummaryType } from "./PokemonSummaryType";

 export type PaginatedPokemonSummaryListType = {
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
    results?: PokemonSummaryType[];
};