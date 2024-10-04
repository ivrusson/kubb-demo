import type { ContestEffectEffectTextType } from "./ContestEffectEffectTextType";
import type { ContestEffectFlavorTextType } from "./ContestEffectFlavorTextType";

 export type ContestEffectDetailType = {
    /**
     * @type integer
    */
    readonly id: number;
    /**
     * @type integer
    */
    appeal: number;
    /**
     * @type integer
    */
    jam: number;
    /**
     * @type array
    */
    readonly effect_entries: ContestEffectEffectTextType[];
    /**
     * @type array
    */
    readonly flavor_text_entries: ContestEffectFlavorTextType[];
};