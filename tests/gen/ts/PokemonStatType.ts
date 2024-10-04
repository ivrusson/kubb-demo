import type { StatSummaryType } from "./StatSummaryType";

 export type PokemonStatType = {
    /**
     * @type integer
    */
    base_stat: number;
    /**
     * @type integer
    */
    effort: number;
    /**
     * @type object
    */
    stat: StatSummaryType;
};