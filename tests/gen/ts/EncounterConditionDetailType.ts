import type { EncounterConditionValueSummaryType } from "./EncounterConditionValueSummaryType";
import type { EncounterConditionNameType } from "./EncounterConditionNameType";

 export type EncounterConditionDetailType = {
    /**
     * @type integer
    */
    readonly id: number;
    /**
     * @type string
    */
    name: string;
    /**
     * @type array
    */
    readonly values: EncounterConditionValueSummaryType[];
    /**
     * @type array
    */
    readonly names: EncounterConditionNameType[];
};