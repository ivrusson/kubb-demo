import type { GrowthRateDescriptionType } from "./GrowthRateDescriptionType";
import type { ExperienceType } from "./ExperienceType";
import type { PokemonSpeciesSummaryType } from "./PokemonSpeciesSummaryType";

 export type GrowthRateDetailType = {
    /**
     * @type integer
    */
    readonly id: number;
    /**
     * @type string
    */
    name: string;
    /**
     * @type string
    */
    formula: string;
    /**
     * @type array
    */
    readonly descriptions: GrowthRateDescriptionType[];
    /**
     * @type array
    */
    readonly levels: ExperienceType[];
    /**
     * @type array
    */
    readonly pokemon_species: PokemonSpeciesSummaryType[];
};