import type { PokemonSpeciesSummaryType } from "./PokemonSpeciesSummaryType";

 export type PaginatedPokemonSpeciesSummaryListType = {
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
    results?: PokemonSpeciesSummaryType[];
};