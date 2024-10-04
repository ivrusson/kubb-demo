import type { ItemFlingEffectSummaryType } from "./ItemFlingEffectSummaryType";
import type { ItemCategorySummaryType } from "./ItemCategorySummaryType";
import type { ItemEffectTextType } from "./ItemEffectTextType";
import type { ItemFlavorTextType } from "./ItemFlavorTextType";
import type { ItemGameIndexType } from "./ItemGameIndexType";
import type { ItemNameType } from "./ItemNameType";

 export type ItemDetailType = {
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
    cost?: number | null;
    /**
     * @type integer | undefined
    */
    fling_power?: number | null;
    /**
     * @type object
    */
    fling_effect: ItemFlingEffectSummaryType;
    /**
     * @type array
    */
    readonly attributes: {
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
     * @type object
    */
    category: ItemCategorySummaryType;
    /**
     * @type array
    */
    readonly effect_entries: ItemEffectTextType[];
    /**
     * @type array
    */
    readonly flavor_text_entries: ItemFlavorTextType[];
    /**
     * @type array
    */
    readonly game_indices: ItemGameIndexType[];
    /**
     * @type array
    */
    readonly names: ItemNameType[];
    /**
     * @type array
    */
    readonly held_by_pokemon: {
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
        "version-details": {
            /**
             * @type integer, int32
            */
            rarity: number;
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
    readonly sprites: {
        /**
         * @type string, uri
        */
        default: string;
    };
    /**
     * @type object
    */
    readonly baby_trigger_for: {
        /**
         * @type string, uri
        */
        url: string;
    };
    /**
     * @type array
    */
    readonly machines: {
        /**
         * @type string, uri
        */
        machine: string;
        /**
         * @type object
        */
        version_group: {
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