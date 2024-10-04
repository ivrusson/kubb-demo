import type { GrowthRateSummaryType } from "./GrowthRateSummaryType";
import type { PokemonDexEntryType } from "./PokemonDexEntryType";
import type { PokemonColorSummaryType } from "./PokemonColorSummaryType";
import type { PokemonShapeSummaryType } from "./PokemonShapeSummaryType";
import type { PokemonSpeciesSummaryType } from "./PokemonSpeciesSummaryType";
import type { EvolutionChainSummaryType } from "./EvolutionChainSummaryType";
import type { PokemonHabitatSummaryType } from "./PokemonHabitatSummaryType";
import type { GenerationSummaryType } from "./GenerationSummaryType";
import type { PokemonSpeciesDescriptionType } from "./PokemonSpeciesDescriptionType";
import type { PokemonSpeciesFlavorTextType } from "./PokemonSpeciesFlavorTextType";

 export type PokemonSpeciesDetailType = {
    /**
     * @type integer
    */
    readonly id: number;
    /**
     * @type string
    */
    name: string;
    /**
     * @type integer | undefined
    */
    order?: number | null;
    /**
     * @type integer | undefined
    */
    gender_rate?: number | null;
    /**
     * @type integer | undefined
    */
    capture_rate?: number | null;
    /**
     * @type integer | undefined
    */
    base_happiness?: number | null;
    /**
     * @type boolean | undefined
    */
    is_baby?: boolean;
    /**
     * @type boolean | undefined
    */
    is_legendary?: boolean;
    /**
     * @type boolean | undefined
    */
    is_mythical?: boolean;
    /**
     * @type integer | undefined
    */
    hatch_counter?: number | null;
    /**
     * @type boolean | undefined
    */
    has_gender_differences?: boolean;
    /**
     * @type boolean | undefined
    */
    forms_switchable?: boolean;
    /**
     * @type object
    */
    growth_rate: GrowthRateSummaryType;
    /**
     * @type array
    */
    readonly pokedex_numbers: PokemonDexEntryType[];
    /**
     * @type array
    */
    readonly egg_groups: {
        /**
         * @type string
        */
        name: string;
        /**
         * @type string, uri
        */
        url: string;
    }[];
    /**
     * @type object
    */
    color: PokemonColorSummaryType;
    /**
     * @type object
    */
    shape: PokemonShapeSummaryType;
    /**
     * @type object
    */
    evolves_from_species: PokemonSpeciesSummaryType;
    /**
     * @type object
    */
    evolution_chain: EvolutionChainSummaryType;
    /**
     * @type object
    */
    habitat: PokemonHabitatSummaryType;
    /**
     * @type object
    */
    generation: GenerationSummaryType;
    /**
     * @type array
    */
    readonly names: {
        /**
         * @type object
        */
        language: {
            /**
             * @type string
            */
            name: string;
            /**
             * @type string, uri
            */
            url: string;
        };
        /**
         * @type string
        */
        name: string;
    }[];
    /**
     * @type array
    */
    readonly pal_park_encounters: {
        /**
         * @type object
        */
        area: {
            /**
             * @type string
            */
            name: string;
            /**
             * @type string, uri
            */
            url: string;
        };
        /**
         * @type integer, int32
        */
        base_score: number;
        /**
         * @type integer, int32
        */
        rate: number;
    }[];
    /**
     * @type array
    */
    readonly form_descriptions: PokemonSpeciesDescriptionType[];
    /**
     * @type array
    */
    readonly flavor_text_entries: PokemonSpeciesFlavorTextType[];
    /**
     * @type array
    */
    readonly genera: {
        /**
         * @type string
        */
        genus: string;
        /**
         * @type object
        */
        language: {
            /**
             * @type string
            */
            name: string;
            /**
             * @type string, uri
            */
            url: string;
        };
    }[];
    /**
     * @type array
    */
    readonly varieties: {
        /**
         * @type boolean
        */
        is_default: boolean;
        /**
         * @type object
        */
        pokemon: {
            /**
             * @type string
            */
            name: string;
            /**
             * @type string, uri
            */
            url: string;
        };
    }[];
};