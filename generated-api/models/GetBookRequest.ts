/* tslint:disable */
/* eslint-disable */
/**
 * ForwardChess API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GetBookRequest
 */
export interface GetBookRequest {
    /**
     * 
     * @type {string}
     * @memberof GetBookRequest
     */
    bookId?: string;
    /**
     * 
     * @type {string}
     * @memberof GetBookRequest
     */
    credentials?: string;
}

/**
 * Check if a given object implements the GetBookRequest interface.
 */
export function instanceOfGetBookRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetBookRequestFromJSON(json: any): GetBookRequest {
    return GetBookRequestFromJSONTyped(json, false);
}

export function GetBookRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetBookRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookId': !exists(json, 'bookId') ? undefined : json['bookId'],
        'credentials': !exists(json, 'credentials') ? undefined : json['credentials'],
    };
}

export function GetBookRequestToJSON(value?: GetBookRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookId': value.bookId,
        'credentials': value.credentials,
    };
}

