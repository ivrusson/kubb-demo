import type { ItemSummaryType } from "./ItemSummaryType";
import type { ItemCategoryNameType } from "./ItemCategoryNameType";
import type { ItemPocketSummaryType } from "./ItemPocketSummaryType";

 export type ItemCategoryDetailType = {
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
    readonly items: ItemSummaryType[];
    /**
     * @type array
    */
    readonly names: ItemCategoryNameType[];
    /**
     * @type object
    */
    pocket: ItemPocketSummaryType;
};