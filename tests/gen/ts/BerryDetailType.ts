import type { BerryFirmnessSummaryType } from "./BerryFirmnessSummaryType";
import type { ItemSummaryType } from "./ItemSummaryType";
import type { TypeSummaryType } from "./TypeSummaryType";

 export type BerryDetailType = {
    /**
     * @type integer
    */
    readonly id: number;
    /**
     * @type string
    */
    name: string;
    /**
     * @type integer
    */
    growth_time: number;
    /**
     * @type integer
    */
    max_harvest: number;
    /**
     * @type integer
    */
    natural_gift_power: number;
    /**
     * @type integer
    */
    size: number;
    /**
     * @type integer
    */
    smoothness: number;
    /**
     * @type integer
    */
    soil_dryness: number;
    /**
     * @type object
    */
    firmness: BerryFirmnessSummaryType;
    /**
     * @type array
    */
    readonly flavors: {
        /**
         * @type integer
        */
        potency: number;
        /**
         * @type object
        */
        flavor: {
            /**
             * @description The name of the flavor
             * @type string | undefined
            */
            name?: string;
            /**
             * @description The URL to get more information about the flavor
             * @type string | undefined, uri
            */
            url?: string;
        };
    }[];
    /**
     * @type object
    */
    item: ItemSummaryType;
    /**
     * @type object
    */
    natural_gift_type: TypeSummaryType;
};