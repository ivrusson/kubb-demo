import type { MoveMetaAilmentSummaryType } from "./MoveMetaAilmentSummaryType";
import type { MoveMetaCategorySummaryType } from "./MoveMetaCategorySummaryType";

 export type MoveMetaType = {
    /**
     * @type object
    */
    ailment: MoveMetaAilmentSummaryType;
    /**
     * @type object
    */
    category: MoveMetaCategorySummaryType;
    /**
     * @type integer | undefined
    */
    min_hits?: number | null;
    /**
     * @type integer | undefined
    */
    max_hits?: number | null;
    /**
     * @type integer | undefined
    */
    min_turns?: number | null;
    /**
     * @type integer | undefined
    */
    max_turns?: number | null;
    /**
     * @type integer | undefined
    */
    drain?: number | null;
    /**
     * @type integer | undefined
    */
    healing?: number | null;
    /**
     * @type integer | undefined
    */
    crit_rate?: number | null;
    /**
     * @type integer | undefined
    */
    ailment_chance?: number | null;
    /**
     * @type integer | undefined
    */
    flinch_chance?: number | null;
    /**
     * @type integer | undefined
    */
    stat_chance?: number | null;
};