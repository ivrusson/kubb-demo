import type { GenerationSummaryType } from "./GenerationSummaryType";
import type { VersionSummaryType } from "./VersionSummaryType";

 export type VersionGroupDetailType = {
    /**
     * @type integer
    */
    readonly id: number;
    /**
     * @type string
    */
    name: string;
    /**
     * @type integer | undefined
    */
    order?: number | null;
    /**
     * @type object
    */
    generation: GenerationSummaryType;
    /**
     * @type array
    */
    readonly move_learn_methods: {
        /**
         * @type string
        */
        name: string;
        /**
         * @type string, uri
        */
        url: string;
    }[];
    /**
     * @type array
    */
    readonly pokedexes: {
        /**
         * @type string
        */
        name: string;
        /**
         * @type string, uri
        */
        url: string;
    }[];
    /**
     * @type array
    */
    readonly regions: {
        /**
         * @type string
        */
        name: string;
        /**
         * @type string, uri
        */
        url: string;
    }[];
    /**
     * @type array
    */
    readonly versions: VersionSummaryType[];
};