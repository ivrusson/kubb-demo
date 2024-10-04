import type { PokemonShapeSummaryType } from "./PokemonShapeSummaryType";

 export type PaginatedPokemonShapeSummaryListType = {
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
    results?: PokemonShapeSummaryType[];
};