/* tslint:disable */
/* eslint-disable */
/**
 * ForwardChess API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
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
 * @interface UpdateAccountRequest
 */
export interface UpdateAccountRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateAccountRequest
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateAccountRequest
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateAccountRequest
     */
    password?: string;
}

/**
 * Check if a given object implements the UpdateAccountRequest interface.
 */
export function instanceOfUpdateAccountRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateAccountRequestFromJSON(json: any): UpdateAccountRequest {
    return UpdateAccountRequestFromJSONTyped(json, false);
}

export function UpdateAccountRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateAccountRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'password': !exists(json, 'password') ? undefined : json['password'],
    };
}

export function UpdateAccountRequestToJSON(value?: UpdateAccountRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'firstName': value.firstName,
        'lastName': value.lastName,
        'password': value.password,
    };
}
