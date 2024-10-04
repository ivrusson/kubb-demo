import type { PokemonHabitatNameType } from "./PokemonHabitatNameType";
import type { PokemonSpeciesSummaryType } from "./PokemonSpeciesSummaryType";

 export type PokemonHabitatDetailType = {
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
    readonly names: PokemonHabitatNameType[];
    /**
     * @type array
    */
    readonly pokemon_species: PokemonSpeciesSummaryType[];
};