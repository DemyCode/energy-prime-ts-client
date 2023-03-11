/**
 * Energy Prime API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.1.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* User model.
*/
export class User {
    'id'?: number;
    'username': string;
    'email': string;
    'hashedPassword': string;
    'isActive'?: boolean;
    'isSuperuser'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "hashedPassword",
            "baseName": "hashed_password",
            "type": "string",
            "format": ""
        },
        {
            "name": "isActive",
            "baseName": "is_active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isSuperuser",
            "baseName": "is_superuser",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return User.attributeTypeMap;
    }

    public constructor() {
    }
}
