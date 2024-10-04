import type { PokemonColorNameType } from "./PokemonColorNameType";
import type { PokemonSpeciesSummaryType } from "./PokemonSpeciesSummaryType";

 export type PokemonColorDetailType = {
    /**
     * @type integer
    */
    readonly id: number;
    /**
     * @type string
    */
    name: string;
    /**
     * @type array
    */
    readonly names: PokemonColorNameType[];
    /**
     * @type array
    */
    readonly pokemon_species: PokemonSpeciesSummaryType[];
};