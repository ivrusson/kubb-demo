import type { SuperContestEffectFlavorTextType } from "./SuperContestEffectFlavorTextType";
import type { MoveSummaryType } from "./MoveSummaryType";

 export type SuperContestEffectDetailType = {
    /**
     * @type integer
    */
    readonly id: number;
    /**
     * @type integer
    */
    appeal: number;
    /**
     * @type array
    */
    readonly flavor_text_entries: SuperContestEffectFlavorTextType[];
    /**
     * @type array
    */
    readonly moves: MoveSummaryType[];
};