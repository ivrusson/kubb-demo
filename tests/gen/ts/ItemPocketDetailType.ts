import type { ItemCategorySummaryType } from "./ItemCategorySummaryType";
import type { ItemPocketNameType } from "./ItemPocketNameType";

 export type ItemPocketDetailType = {
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
    readonly categories: ItemCategorySummaryType[];
    /**
     * @type array
    */
    readonly names: ItemPocketNameType[];
};