import type { MoveMetaCategorySummaryType } from "./MoveMetaCategorySummaryType";

 export type PaginatedMoveMetaCategorySummaryListType = {
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
    results?: MoveMetaCategorySummaryType[];
};