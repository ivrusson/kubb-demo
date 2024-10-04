import type { PokedexDescriptionType } from "./PokedexDescriptionType";
import type { PokedexNameType } from "./PokedexNameType";
import type { RegionSummaryType } from "./RegionSummaryType";

 export type PokedexDetailType = {
    /**
     * @type integer
    */
    readonly id: number;
    /**
     * @type string
    */
    name: string;
    /**
     * @type boolean | undefined
    */
    is_main_series?: boolean;
    /**
     * @type array
    */
    readonly descriptions: PokedexDescriptionType[];
    /**
     * @type array
    */
    readonly names: PokedexNameType[];
    /**
     * @type array
    */
    readonly pokemon_entries: {
        /**
         * @type integer, int32
        */
        entry_number: number;
        /**
         * @type object
        */
        pokemon_species: {
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
     * @type object
    */
    region: RegionSummaryType;
    /**
     * @type array
    */
    readonly version_groups: {
        /**
         * @type string
        */
        name: string;
        /**
         * @type string, uri
        */
        url: string;
    }[];
};