import type { GenerationSummaryType } from "./GenerationSummaryType";
import type { AbilityNameType } from "./AbilityNameType";
import type { AbilityEffectTextType } from "./AbilityEffectTextType";
import type { AbilityChangeType } from "./AbilityChangeType";
import type { AbilityFlavorTextType } from "./AbilityFlavorTextType";

 export type AbilityDetailType = {
    /**
     * @type integer
    */
    readonly id: number;
    /**
     * @type string
    */
    name: string;
    /**
     * @type boolean | undefined
    */
    is_main_series?: boolean;
    /**
     * @type object
    */
    generation: GenerationSummaryType;
    /**
     * @type array
    */
    readonly names: AbilityNameType[];
    /**
     * @type array
    */
    readonly effect_entries: AbilityEffectTextType[];
    /**
     * @type array
    */
    readonly effect_changes: AbilityChangeType[];
    /**
     * @type array
    */
    readonly flavor_text_entries: AbilityFlavorTextType[];
    /**
     * @type array
    */
    readonly pokemon: {
        /**
         * @type boolean
        */
        is_hidden: boolean;
        /**
         * @type integer, int32
        */
        slot: number;
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
    }[];
};