import type { LocationSummaryType } from "./LocationSummaryType";
import type { LocationAreaNameType } from "./LocationAreaNameType";

 export type LocationAreaDetailType = {
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
    game_index: number;
    /**
     * @type array
    */
    readonly encounter_method_rates: {
        /**
         * @type object
        */
        encounter_method: {
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
         * @type array
        */
        version_details: {
            /**
             * @type integer, int32
            */
            rate: number;
            /**
             * @type object
            */
            version: {
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
    }[];
    /**
     * @type object
    */
    location: LocationSummaryType;
    /**
     * @type array
    */
    readonly names: LocationAreaNameType[];
    /**
     * @type array
    */
    readonly pokemon_encounters: {
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
        /**
         * @type array
        */
        version_details: {
            /**
             * @type object
            */
            version: {
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
            max_chance: number;
            /**
             * @type object
            */
            encounter_details: {
                /**
                 * @type integer, int32
                */
                min_level: number;
                /**
                 * @type integer, int32
                */
                max_level: number;
                /**
                 * @type object | undefined
                */
                condition_values?: {
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
                chance: number;
                /**
                 * @type object
                */
                method: {
                    /**
                     * @type string
                    */
                    name: string;
                    /**
                     * @type string, uri
                    */
                    url: string;
                };
            };
        }[];
    }[];
};