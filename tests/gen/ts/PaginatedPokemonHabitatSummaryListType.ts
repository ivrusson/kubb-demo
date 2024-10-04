import type { PokemonHabitatSummaryType } from "./PokemonHabitatSummaryType";

 export type PaginatedPokemonHabitatSummaryListType = {
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
    results?: PokemonHabitatSummaryType[];
};