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
import type { Account } from './Account';
import {
    AccountFromJSON,
    AccountFromJSONTyped,
    AccountToJSON,
} from './Account';

/**
 * 
 * @export
 * @interface Login200Response
 */
export interface Login200Response {
    /**
     * 
     * @type {Account}
     * @memberof Login200Response
     */
    account?: Account;
    /**
     * 
     * @type {Array<string>}
     * @memberof Login200Response
     */
    purchases?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof Login200Response
     */
    deviceEnabled?: boolean;
}

/**
 * Check if a given object implements the Login200Response interface.
 */
export function instanceOfLogin200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function Login200ResponseFromJSON(json: any): Login200Response {
    return Login200ResponseFromJSONTyped(json, false);
}

export function Login200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): Login200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'account': !exists(json, 'account') ? undefined : AccountFromJSON(json['account']),
        'purchases': !exists(json, 'purchases') ? undefined : json['purchases'],
        'deviceEnabled': !exists(json, 'deviceEnabled') ? undefined : json['deviceEnabled'],
    };
}

export function Login200ResponseToJSON(value?: Login200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account': AccountToJSON(value.account),
        'purchases': value.purchases,
        'deviceEnabled': value.deviceEnabled,
    };
}

