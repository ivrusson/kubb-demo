import type { ItemSummaryType } from "./ItemSummaryType";
import type { VersionGroupSummaryType } from "./VersionGroupSummaryType";
import type { MoveSummaryType } from "./MoveSummaryType";

 export type MachineDetailType = {
    /**
     * @type integer
    */
    readonly id: number;
    /**
     * @type object
    */
    item: ItemSummaryType;
    /**
     * @type object
    */
    version_group: VersionGroupSummaryType;
    /**
     * @type object
    */
    move: MoveSummaryType;
};