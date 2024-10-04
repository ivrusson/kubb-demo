import type { EggGroupNameType } from "./EggGroupNameType";

 export type EggGroupDetailType = {
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
    readonly names: EggGroupNameType[];
    /**
     * @type array
    */
    readonly pokemon_species: {
        /**
         * @description Pokemon species name.
         * @type string | undefined
        */
        name?: string;
        /**
         * @description The URL to get more information about the species
         * @type string | undefined, uri
        */
        url?: string;
    }[];
};