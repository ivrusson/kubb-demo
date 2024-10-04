import type { StatSummaryType } from "./StatSummaryType";
import type { CharacteristicDescriptionType } from "./CharacteristicDescriptionType";

 export type CharacteristicDetailType = {
    /**
     * @type integer
    */
    readonly id: number;
    /**
     * @type integer
    */
    gene_modulo: number;
    /**
     * @type array
    */
    readonly possible_values: number[];
    /**
     * @type object
    */
    highest_stat: StatSummaryType;
    /**
     * @type array
    */
    readonly descriptions: CharacteristicDescriptionType[];
};