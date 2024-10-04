import type { VersionNameType } from "./VersionNameType";
import type { VersionGroupSummaryType } from "./VersionGroupSummaryType";

 /**
 * @description Should have a link to Version Group info but the Circular\ndependency and compilation order fight eachother and I\'m\nnot sure how to add anything other than a hyperlink
*/
export type VersionDetailType = {
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
    readonly names: VersionNameType[];
    /**
     * @type object
    */
    version_group: VersionGroupSummaryType;
};