import type { VersionGroupSummaryType } from "./VersionGroupSummaryType";
import type { AbilityChangeEffectTextType } from "./AbilityChangeEffectTextType";

 export type AbilityChangeType = {
    /**
     * @type object
    */
    version_group: VersionGroupSummaryType;
    /**
     * @type array
    */
    readonly effect_entries: AbilityChangeEffectTextType[];
};