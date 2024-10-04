import type { MoveDamageClassDescriptionType } from "./MoveDamageClassDescriptionType";
import type { MoveSummaryType } from "./MoveSummaryType";
import type { MoveDamageClassNameType } from "./MoveDamageClassNameType";

 export type MoveDamageClassDetailType = {
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
    readonly descriptions: MoveDamageClassDescriptionType[];
    /**
     * @type array
    */
    readonly moves: MoveSummaryType[];
    /**
     * @type array
    */
    readonly names: MoveDamageClassNameType[];
};