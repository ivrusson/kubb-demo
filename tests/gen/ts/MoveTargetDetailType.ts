import type { MoveTargetDescriptionType } from "./MoveTargetDescriptionType";
import type { MoveSummaryType } from "./MoveSummaryType";
import type { MoveTargetNameType } from "./MoveTargetNameType";

 export type MoveTargetDetailType = {
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
    readonly descriptions: MoveTargetDescriptionType[];
    /**
     * @type array
    */
    readonly moves: MoveSummaryType[];
    /**
     * @type array
    */
    readonly names: MoveTargetNameType[];
};