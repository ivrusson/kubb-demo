import type { LanguageSummaryType } from "./LanguageSummaryType";
import type { VersionGroupSummaryType } from "./VersionGroupSummaryType";

 export type MoveFlavorTextType = {
    /**
     * @type string
    */
    flavor_text: string;
    /**
     * @type object
    */
    language: LanguageSummaryType;
    /**
     * @type object
    */
    version_group: VersionGroupSummaryType;
};