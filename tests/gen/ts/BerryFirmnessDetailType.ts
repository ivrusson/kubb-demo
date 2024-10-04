import type { BerrySummaryType } from "./BerrySummaryType";
import type { BerryFirmnessNameType } from "./BerryFirmnessNameType";

 export type BerryFirmnessDetailType = {
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
    readonly berries: BerrySummaryType[];
    /**
     * @type array
    */
    readonly names: BerryFirmnessNameType[];
};