import type { LanguageSummaryType } from "./LanguageSummaryType";

 export type ItemAttributeDescriptionType = {
    /**
     * @type string | undefined
    */
    description?: string;
    /**
     * @type object
    */
    language: LanguageSummaryType;
};