import type { LocationSummaryType } from "./LocationSummaryType";
import type { GenerationSummaryType } from "./GenerationSummaryType";
import type { RegionNameType } from "./RegionNameType";
import type { PokedexSummaryType } from "./PokedexSummaryType";

 export type RegionDetailType = {
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
    readonly locations: LocationSummaryType[];
    readonly main_generation: GenerationSummaryType;
    /**
     * @type array
    */
    readonly names: RegionNameType[];
    /**
     * @type array
    */
    readonly pokedexes: PokedexSummaryType[];
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