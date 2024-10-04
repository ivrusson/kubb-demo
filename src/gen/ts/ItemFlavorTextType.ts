import type { VersionGroupSummaryType } from "./VersionGroupSummaryType";
import type { LanguageSummaryType } from "./LanguageSummaryType";

 export type ItemFlavorTextType = {
    /**
     * @type string
    */
    text: string;
    /**
     * @type object
    */
    version_group: VersionGroupSummaryType;
    /**
     * @type object
    */
    language: LanguageSummaryType;
};