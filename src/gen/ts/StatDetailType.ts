import type { CharacteristicSummaryType } from "./CharacteristicSummaryType";
import type { MoveDamageClassSummaryType } from "./MoveDamageClassSummaryType";
import type { StatNameType } from "./StatNameType";

 export type StatDetailType = {
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
     * @type boolean | undefined
    */
    is_battle_only?: boolean;
    /**
     * @type object
    */
    readonly affecting_moves: {
        /**
         * @type array
        */
        increase: {
            /**
             * @type integer, int32
            */
            change: number;
            /**
             * @type object
            */
            move: {
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
        decrease: {
            /**
             * @type integer, int32
            */
            change: number;
            /**
             * @type object
            */
            move: {
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
     * @type object
    */
    readonly affecting_natures: {
        /**
         * @type array
        */
        increase: {
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
        decrease: {
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
    readonly characteristics: CharacteristicSummaryType[];
    /**
     * @type object
    */
    move_damage_class: MoveDamageClassSummaryType;
    /**
     * @type array
    */
    readonly names: StatNameType[];
};