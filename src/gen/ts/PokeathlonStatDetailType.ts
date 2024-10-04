import type { PokeathlonStatNameType } from "./PokeathlonStatNameType";

 export type PokeathlonStatDetailType = {
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
    readonly affecting_natures: {
        /**
         * @type array
        */
        decrease: {
            /**
             * @type integer, int32
            */
            max_change: number;
            /**
             * @type object
            */
            nature: {
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
        increase: {
            /**
             * @type integer, int32
            */
            max_change: number;
            /**
             * @type object
            */
            nature: {
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
    /**
     * @type array
    */
    readonly names: PokeathlonStatNameType[];
};