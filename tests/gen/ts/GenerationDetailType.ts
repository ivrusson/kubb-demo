import type { AbilitySummaryType } from "./AbilitySummaryType";
import type { RegionSummaryType } from "./RegionSummaryType";
import type { MoveSummaryType } from "./MoveSummaryType";
import type { GenerationNameType } from "./GenerationNameType";
import type { PokemonSpeciesSummaryType } from "./PokemonSpeciesSummaryType";
import type { TypeSummaryType } from "./TypeSummaryType";
import type { VersionGroupSummaryType } from "./VersionGroupSummaryType";

 export type GenerationDetailType = {
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
    readonly abilities: AbilitySummaryType[];
    /**
     * @type object
    */
    main_region: RegionSummaryType;
    /**
     * @type array
    */
    readonly moves: MoveSummaryType[];
    /**
     * @type array
    */
    readonly names: GenerationNameType[];
    /**
     * @type array
    */
    readonly pokemon_species: PokemonSpeciesSummaryType[];
    /**
     * @type array
    */
    readonly types: TypeSummaryType[];
    /**
     * @type array
    */
    readonly version_groups: VersionGroupSummaryType[];
};