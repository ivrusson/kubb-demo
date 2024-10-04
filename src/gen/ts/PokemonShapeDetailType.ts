import type { PokemonSpeciesSummaryType } from "./PokemonSpeciesSummaryType";

 export type PokemonShapeDetailType = {
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
    readonly awesome_names: {
        /**
         * @type string
        */
        awesome_name: string;
        /**
         * @type object
        */
        language: {
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
    readonly names: {
        /**
         * @type string, uri
        */
        url: string;
        /**
         * @type string
        */
        name: string;
    }[];
    /**
     * @type array
    */
    readonly pokemon_species: PokemonSpeciesSummaryType[];
};