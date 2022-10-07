/* tslint:disable */
/* eslint-disable */
/**
 * ForwardChess API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.7
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
 * @interface Account
 */
export interface Account {
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    lastName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Account
     */
    emailValidated?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Account
     */
    author?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Account
     */
    created?: number;
    /**
     * 
     * @type {number}
     * @memberof Account
     */
    updated?: number;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    deviceId?: string;
    /**
     * 
     * @type {number}
     * @memberof Account
     */
    maxEnabledDevices?: number;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    mobile?: string;
}

/**
 * Check if a given object implements the Account interface.
 */
export function instanceOfAccount(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountFromJSON(json: any): Account {
    return AccountFromJSONTyped(json, false);
}

export function AccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): Account {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : json['email'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'emailValidated': !exists(json, 'emailValidated') ? undefined : json['emailValidated'],
        'author': !exists(json, 'author') ? undefined : json['author'],
        'created': !exists(json, 'created') ? undefined : json['created'],
        'updated': !exists(json, 'updated') ? undefined : json['updated'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'deviceId': !exists(json, 'deviceId') ? undefined : json['deviceId'],
        'maxEnabledDevices': !exists(json, 'maxEnabledDevices') ? undefined : json['maxEnabledDevices'],
        'mobile': !exists(json, 'mobile') ? undefined : json['mobile'],
    };
}

export function AccountToJSON(value?: Account | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'password': value.password,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'emailValidated': value.emailValidated,
        'author': value.author,
        'created': value.created,
        'updated': value.updated,
        'status': value.status,
        'deviceId': value.deviceId,
        'maxEnabledDevices': value.maxEnabledDevices,
        'mobile': value.mobile,
    };
}

