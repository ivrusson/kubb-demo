import type { MoveBattleStyleSummaryType } from "./MoveBattleStyleSummaryType";

 export type NatureBattleStylePreferenceType = {
    /**
     * @type integer
    */
    low_hp_preference: number;
    /**
     * @type integer
    */
    high_hp_preference: number;
    /**
     * @type object
    */
    move_battle_style: MoveBattleStyleSummaryType;
};