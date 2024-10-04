import type { PokemonFormSummaryType } from "./PokemonFormSummaryType";

 export type PaginatedPokemonFormSummaryListType = {
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
    results?: PokemonFormSummaryType[];
};