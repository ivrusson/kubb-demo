import type { ItemFlingEffectEffectTextType } from "./ItemFlingEffectEffectTextType";
import type { ItemSummaryType } from "./ItemSummaryType";

 export type ItemFlingEffectDetailType = {
    /**
     * @type integer
    */
    readonly id: number;
    /**
     * @type string
    */
    name: string;
    /**
     * @type array
    */
    readonly effect_entries: ItemFlingEffectEffectTextType[];
    /**
     * @type array
    */
    readonly items: ItemSummaryType[];
};