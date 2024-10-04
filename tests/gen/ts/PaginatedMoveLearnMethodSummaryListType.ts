import type { MoveLearnMethodSummaryType } from "./MoveLearnMethodSummaryType";

 export type PaginatedMoveLearnMethodSummaryListType = {
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
    results?: MoveLearnMethodSummaryType[];
};