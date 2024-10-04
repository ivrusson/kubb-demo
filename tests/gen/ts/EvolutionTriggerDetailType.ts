import type { EvolutionTriggerNameType } from "./EvolutionTriggerNameType";

 export type EvolutionTriggerDetailType = {
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
    readonly names: EvolutionTriggerNameType[];
    /**
     * @type array
    */
    readonly pokemon_species: {
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