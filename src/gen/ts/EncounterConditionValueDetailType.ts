import type { EncounterConditionSummaryType } from "./EncounterConditionSummaryType";
import type { EncounterConditionValueNameType } from "./EncounterConditionValueNameType";

 export type EncounterConditionValueDetailType = {
    /**
     * @type integer
    */
    readonly id: number;
    /**
     * @type string
    */
    name: string;
    /**
     * @type object
    */
    condition: EncounterConditionSummaryType;
    /**
     * @type array
    */
    readonly names: EncounterConditionValueNameType[];
};