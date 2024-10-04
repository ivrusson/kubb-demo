import type { RegionSummaryType } from "./RegionSummaryType";
import type { LocationNameType } from "./LocationNameType";
import type { LocationGameIndexType } from "./LocationGameIndexType";
import type { LocationAreaSummaryType } from "./LocationAreaSummaryType";

 export type LocationDetailType = {
    /**
     * @type integer
    */
    readonly id: number;
    /**
     * @type string
    */
    name: string;
    /**
     * @type object
    */
    region: RegionSummaryType;
    /**
     * @type array
    */
    readonly names: LocationNameType[];
    /**
     * @type array
    */
    readonly game_indices: LocationGameIndexType[];
    /**
     * @type array
    */
    readonly areas: LocationAreaSummaryType[];
};