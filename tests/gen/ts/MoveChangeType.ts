import type { TypeSummaryType } from "./TypeSummaryType";
import type { VersionGroupSummaryType } from "./VersionGroupSummaryType";

 export type MoveChangeType = {
    /**
     * @type integer | undefined
    */
    accuracy?: number | null;
    /**
     * @type integer | undefined
    */
    power?: number | null;
    /**
     * @type integer | undefined
    */
    pp?: number | null;
    /**
     * @type integer
    */
    effect_chance: number;
    /**
     * @type array
    */
    readonly effect_entries: {
        /**
         * @type string
        */
        effect: string;
        /**
         * @type string
        */
        short_effect: string;
        /**
         * @type object
        */
        language: {
            /**
             * @type string
            */
            name: string;
            /**
             * @type string, uri
            */
            url: string;
        };
    }[];
    /**
     * @type object
    */
    type: TypeSummaryType;
    /**
     * @type object
    */
    version_group: VersionGroupSummaryType;
};