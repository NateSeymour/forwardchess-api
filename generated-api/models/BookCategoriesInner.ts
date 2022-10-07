/* tslint:disable */
/* eslint-disable */
/**
 * ForwardChess API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.4
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
 * @interface BookCategoriesInner
 */
export interface BookCategoriesInner {
    /**
     * 
     * @type {number}
     * @memberof BookCategoriesInner
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof BookCategoriesInner
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof BookCategoriesInner
     */
    position?: number;
}

/**
 * Check if a given object implements the BookCategoriesInner interface.
 */
export function instanceOfBookCategoriesInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BookCategoriesInnerFromJSON(json: any): BookCategoriesInner {
    return BookCategoriesInnerFromJSONTyped(json, false);
}

export function BookCategoriesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookCategoriesInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'position': !exists(json, 'position') ? undefined : json['position'],
    };
}

export function BookCategoriesInnerToJSON(value?: BookCategoriesInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'position': value.position,
    };
}

