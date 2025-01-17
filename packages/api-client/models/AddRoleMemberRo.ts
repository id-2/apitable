/**
 * Api Document
 * Backend_Server Api Document
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RoleMemberUnitRo } from '../models/RoleMemberUnitRo';
import { HttpFile } from '../http/http';

/**
* Add role members request
*/
export class AddRoleMemberRo {
    /**
    * team or member
    */
    'unitList': Array<RoleMemberUnitRo>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "unitList",
            "baseName": "unitList",
            "type": "Array<RoleMemberUnitRo>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AddRoleMemberRo.attributeTypeMap;
    }

    public constructor() {
    }
}

