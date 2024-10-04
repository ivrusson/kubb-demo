import type { StatSummaryType } from "./StatSummaryType";
import type { BerryFlavorSummaryType } from "./BerryFlavorSummaryType";
import type { BerrySummaryType } from "./BerrySummaryType";
import type { NatureBattleStylePreferenceType } from "./NatureBattleStylePreferenceType";
import type { NatureNameType } from "./NatureNameType";

 export type NatureDetailType = {
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
    decreased_stat: StatSummaryType;
    /**
     * @type object
    */
    increased_stat: StatSummaryType;
    /**
     * @type object
    */
    likes_flavor: BerryFlavorSummaryType;
    /**
     * @type object
    */
    hates_flavor: BerryFlavorSummaryType;
    /**
     * @type array
    */
    readonly berries: BerrySummaryType[];
    /**
     * @type array
    */
    readonly pokeathlon_stat_changes: {
        /**
         * @type integer, int32
        */
        max_change: number;
        /**
         * @type object
        */
        pokeathlon_stat: {
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
    readonly move_battle_style_preferences: NatureBattleStylePreferenceType[];
    /**
     * @type array
    */
    readonly names: NatureNameType[];
};