import type { BerryFlavorSummaryType } from "./BerryFlavorSummaryType";
import type { ContestTypeNameType } from "./ContestTypeNameType";

 export type ContestTypeDetailType = {
    /**
     * @type integer
    */
    readonly id: number;
    /**
     * @type string
    */
    name: string;
    readonly berry_flavor: BerryFlavorSummaryType;
    /**
     * @type array
    */
    readonly names: ContestTypeNameType[];
};