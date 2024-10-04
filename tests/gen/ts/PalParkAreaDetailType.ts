import type { PalParkAreaNameType } from "./PalParkAreaNameType";

 export type PalParkAreaDetailType = {
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
    readonly names: PalParkAreaNameType[];
    /**
     * @type array
    */
    readonly pokemon_encounters: {
        /**
         * @type integer, int32
        */
        base_score: number;
        /**
         * @type object
        */
        "pokemon-species": {
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
        rate: number;
    }[];
};