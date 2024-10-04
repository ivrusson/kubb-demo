import type { PokedexSummaryType } from "./PokedexSummaryType";

 export type PokemonDexEntryType = {
    /**
     * @type integer
    */
    entry_number: number;
    /**
     * @type object
    */
    pokedex: PokedexSummaryType;
};