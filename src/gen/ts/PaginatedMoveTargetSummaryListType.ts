import type { MoveTargetSummaryType } from "./MoveTargetSummaryType";

 export type PaginatedMoveTargetSummaryListType = {
    /**
     * @type integer | undefined
    */
    count?: number;
    /**
     * @type string, uri
    */
    next?: string | null;
    /**
     * @type string, uri
    */
    previous?: string | null;
    /**
     * @type array | undefined
    */
    results?: MoveTargetSummaryType[];
};