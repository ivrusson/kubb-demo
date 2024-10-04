import type { LanguageSummaryType } from "./LanguageSummaryType";

 export type AbilityEffectTextType = {
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
    language: LanguageSummaryType;
};