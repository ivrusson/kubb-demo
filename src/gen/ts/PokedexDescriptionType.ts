import type { LanguageSummaryType } from "./LanguageSummaryType";

 export type PokedexDescriptionType = {
    /**
     * @type string | undefined
    */
    description?: string;
    /**
     * @type object
    */
    language: LanguageSummaryType;
};