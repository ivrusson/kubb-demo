import type { ContestTypeSummaryType } from "./ContestTypeSummaryType";
import type { ContestEffectSummaryType } from "./ContestEffectSummaryType";
import type { MoveDamageClassSummaryType } from "./MoveDamageClassSummaryType";
import type { GenerationSummaryType } from "./GenerationSummaryType";
import type { MoveMetaType } from "./MoveMetaType";
import type { MoveNameType } from "./MoveNameType";
import type { MoveChangeType } from "./MoveChangeType";
import type { SuperContestEffectSummaryType } from "./SuperContestEffectSummaryType";
import type { MoveTargetSummaryType } from "./MoveTargetSummaryType";
import type { TypeSummaryType } from "./TypeSummaryType";
import type { MoveFlavorTextType } from "./MoveFlavorTextType";

 export type MoveDetailType = {
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
    accuracy?: number | null;
    /**
     * @type integer
    */
    effect_chance: number;
    /**
     * @type integer | undefined
    */
    pp?: number | null;
    /**
     * @type integer | undefined
    */
    priority?: number | null;
    /**
     * @type integer | undefined
    */
    power?: number | null;
    /**
     * @type object
    */
    readonly contest_combos: {
        /**
         * @type object
        */
        normal: {
            /**
             * @type array
            */
            use_before: {
                /**
                 * @type string
                */
                name: string;
                /**
                 * @type string, uri
                */
                url: string;
            }[] | null;
            /**
             * @type array
            */
            use_after: {
                /**
                 * @type string
                */
                name: string;
                /**
                 * @type string, uri
                */
                url: string;
            }[] | null;
        };
        /**
         * @type object
        */
        super: {
            /**
             * @type array
            */
            use_before: {
                /**
                 * @type string
                */
                name: string;
                /**
                 * @type string, uri
                */
                url: string;
            }[] | null;
            /**
             * @type array
            */
            use_after: {
                /**
                 * @type string
                */
                name: string;
                /**
                 * @type string, uri
                */
                url: string;
            }[] | null;
        };
    };
    /**
     * @type object
    */
    contest_type: ContestTypeSummaryType;
    /**
     * @type object
    */
    contest_effect: ContestEffectSummaryType;
    /**
     * @type object
    */
    damage_class: MoveDamageClassSummaryType;
    /**
     * @type array
    */
    readonly effect_entries: {
        /**
         * @type string
        */
        effect: string;
        /**
         * @type string
        */
        short_effect: string;
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
    readonly effect_changes: {
        /**
         * @type array
        */
        effect_entries: {
            /**
             * @type string
            */
            effect: string;
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
    /**
     * @type object
    */
    generation: GenerationSummaryType;
    readonly meta: MoveMetaType;
    /**
     * @type array
    */
    readonly names: MoveNameType[];
    /**
     * @type array
    */
    readonly past_values: MoveChangeType[];
    /**
     * @type array
    */
    readonly stat_changes: {
        /**
         * @type integer, int32
        */
        change: number;
        /**
         * @type object
        */
        stat: {
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
     * @type object
    */
    super_contest_effect: SuperContestEffectSummaryType;
    /**
     * @type object
    */
    target: MoveTargetSummaryType;
    /**
     * @type object
    */
    type: TypeSummaryType;
    /**
     * @type array
    */
    readonly machines: {
        /**
         * @type object
        */
        machine: {
            /**
             * @type string, uri
            */
            url: string;
        };
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
    /**
     * @type array
    */
    readonly flavor_text_entries: MoveFlavorTextType[];
    /**
     * @type array
    */
    readonly learned_by_pokemon: {
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