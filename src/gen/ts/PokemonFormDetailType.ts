import type { PokemonSummaryType } from "./PokemonSummaryType";
import type { VersionGroupSummaryType } from "./VersionGroupSummaryType";

 export type PokemonFormDetailType = {
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
     * @type integer | undefined
    */
    form_order?: number | null;
    /**
     * @type boolean | undefined
    */
    is_default?: boolean;
    /**
     * @type boolean | undefined
    */
    is_battle_only?: boolean;
    /**
     * @type boolean | undefined
    */
    is_mega?: boolean;
    /**
     * @type string
    */
    form_name: string;
    /**
     * @type object
    */
    pokemon: PokemonSummaryType;
    /**
     * @type object
    */
    readonly sprites: {
        /**
         * @type string | undefined, uri
        */
        default?: string;
        [key: string]: string;
    };
    /**
     * @type object
    */
    version_group: VersionGroupSummaryType;
    /**
     * @type array
    */
    readonly form_names: {
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
        /**
         * @type string
        */
        name: string;
    }[];
    /**
     * @type array
    */
    readonly names: {
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
        /**
         * @type string
        */
        name: string;
    }[];
    /**
     * @type array
    */
    readonly types: {
        /**
         * @type integer, int32
        */
        slot: number;
        /**
         * @type object
        */
        type: {
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