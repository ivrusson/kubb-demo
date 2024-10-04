import type { LanguageSummaryType } from "./LanguageSummaryType";

 export type PaginatedLanguageSummaryListType = {
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
    results?: LanguageSummaryType[];
};