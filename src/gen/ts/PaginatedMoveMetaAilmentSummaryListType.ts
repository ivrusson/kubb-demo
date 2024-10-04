import type { MoveMetaAilmentSummaryType } from "./MoveMetaAilmentSummaryType";

 export type PaginatedMoveMetaAilmentSummaryListType = {
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
    results?: MoveMetaAilmentSummaryType[];
};