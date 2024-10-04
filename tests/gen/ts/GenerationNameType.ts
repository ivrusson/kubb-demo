import type { LanguageSummaryType } from "./LanguageSummaryType";

 export type GenerationNameType = {
    /**
     * @type string
    */
    name: string;
    /**
     * @type object
    */
    language: LanguageSummaryType;
};