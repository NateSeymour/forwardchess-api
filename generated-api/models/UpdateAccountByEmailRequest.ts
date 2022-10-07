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
 * @interface UpdateAccountByEmailRequest
 */
export interface UpdateAccountByEmailRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateAccountByEmailRequest
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateAccountByEmailRequest
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateAccountByEmailRequest
     */
    password?: string;
}

/**
 * Check if a given object implements the UpdateAccountByEmailRequest interface.
 */
export function instanceOfUpdateAccountByEmailRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateAccountByEmailRequestFromJSON(json: any): UpdateAccountByEmailRequest {
    return UpdateAccountByEmailRequestFromJSONTyped(json, false);
}

export function UpdateAccountByEmailRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateAccountByEmailRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'password': !exists(json, 'password') ? undefined : json['password'],
    };
}

export function UpdateAccountByEmailRequestToJSON(value?: UpdateAccountByEmailRequest | null): any {
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

