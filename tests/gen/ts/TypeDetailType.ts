import type { TypeGameIndexType } from "./TypeGameIndexType";
import type { GenerationSummaryType } from "./GenerationSummaryType";
import type { MoveDamageClassSummaryType } from "./MoveDamageClassSummaryType";
import type { AbilityNameType } from "./AbilityNameType";
import type { MoveSummaryType } from "./MoveSummaryType";

 /**
 * @description Serializer for the Type resource
*/
export type TypeDetailType = {
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
    readonly damage_relations: {
        /**
         * @type array
        */
        no_damage_to: {
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
        half_damage_to: {
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
        double_damage_to: {
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
        no_damage_from: {
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
        half_damage_from: {
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
        double_damage_from: {
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
    /**
     * @type array
    */
    readonly past_damage_relations: {
        /**
         * @type object
        */
        generation: {
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
         * @type object
        */
        damage_relations: {
            /**
             * @type array
            */
            no_damage_to: {
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
            half_damage_to: {
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
            double_damage_to: {
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
            no_damage_from: {
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
            half_damage_from: {
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
            double_damage_from: {
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
    }[];
    /**
     * @type array
    */
    readonly game_indices: TypeGameIndexType[];
    /**
     * @type object
    */
    generation: GenerationSummaryType;
    /**
     * @type object
    */
    move_damage_class: MoveDamageClassSummaryType;
    /**
     * @type array
    */
    readonly names: AbilityNameType[];
    /**
     * @type array
    */
    readonly pokemon: {
        /**
         * @type integer | undefined
        */
        slot?: number;
        /**
         * @type object | undefined
        */
        pokemon?: {
            /**
             * @description The name of the pokemon
             * @type string | undefined
            */
            name?: string;
            /**
             * @description The URL to get more information about the pokemon
             * @type string | undefined, uri
            */
            url?: string;
        };
    }[];
    /**
     * @type array
    */
    readonly moves: MoveSummaryType[];
};