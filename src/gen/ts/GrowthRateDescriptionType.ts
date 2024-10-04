import type { LanguageSummaryType } from "./LanguageSummaryType";

 export type GrowthRateDescriptionType = {
    /**
     * @type string | undefined
    */
    description?: string;
    /**
     * @type object
    */
    language: LanguageSummaryType;
};