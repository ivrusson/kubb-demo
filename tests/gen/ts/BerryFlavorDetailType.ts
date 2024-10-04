import type { ContestTypeSummaryType } from "./ContestTypeSummaryType";
import type { BerryFlavorNameType } from "./BerryFlavorNameType";

 export type BerryFlavorDetailType = {
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
    readonly berries: {
        /**
         * @type integer
        */
        potency: number;
        /**
         * @type object
        */
        berry: {
            /**
             * @description The name of the berry
             * @type string | undefined
            */
            name?: string;
            /**
             * @description The URL to get more information about the berry
             * @type string | undefined, uri
            */
            url?: string;
        };
    }[];
    /**
     * @type object
    */
    contest_type: ContestTypeSummaryType;
    /**
     * @type array
    */
    readonly names: BerryFlavorNameType[];
};