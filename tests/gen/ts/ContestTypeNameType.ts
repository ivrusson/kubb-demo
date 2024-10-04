import type { LanguageSummaryType } from "./LanguageSummaryType";

 export type ContestTypeNameType = {
    /**
     * @type string
    */
    name: string;
    /**
     * @type string
    */
    color: string;
    /**
     * @type object
    */
    language: LanguageSummaryType;
};