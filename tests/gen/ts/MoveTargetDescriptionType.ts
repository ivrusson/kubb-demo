import type { LanguageSummaryType } from "./LanguageSummaryType";

 export type MoveTargetDescriptionType = {
    /**
     * @type string | undefined
    */
    description?: string;
    /**
     * @type object
    */
    language: LanguageSummaryType;
};