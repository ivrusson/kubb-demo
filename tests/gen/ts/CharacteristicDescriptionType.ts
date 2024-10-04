import type { LanguageSummaryType } from "./LanguageSummaryType";

 export type CharacteristicDescriptionType = {
    /**
     * @type string | undefined
    */
    description?: string;
    /**
     * @type object
    */
    language: LanguageSummaryType;
};