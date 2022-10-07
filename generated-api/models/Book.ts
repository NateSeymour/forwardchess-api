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
import type { BookCategoriesInner } from './BookCategoriesInner';
import {
    BookCategoriesInnerFromJSON,
    BookCategoriesInnerFromJSONTyped,
    BookCategoriesInnerToJSON,
} from './BookCategoriesInner';

/**
 * 
 * @export
 * @interface Book
 */
export interface Book {
    /**
     * 
     * @type {string}
     * @memberof Book
     */
    id: string;
    /**
     * 
     * @type {boolean}
     * @memberof Book
     */
    puzzle: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Book
     */
    learning: boolean;
    /**
     * 
     * @type {number}
     * @memberof Book
     */
    created: number;
    /**
     * 
     * @type {string}
     * @memberof Book
     */
    publisher: string;
    /**
     * 
     * @type {string}
     * @memberof Book
     */
    author: string;
    /**
     * 
     * @type {string}
     * @memberof Book
     */
    dateUploaded: string;
    /**
     * 
     * @type {string}
     * @memberof Book
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Book
     */
    bookDetailsURL: string;
    /**
     * 
     * @type {string}
     * @memberof Book
     */
    path: string;
    /**
     * 
     * @type {string}
     * @memberof Book
     */
    icon: string;
    /**
     * 
     * @type {string}
     * @memberof Book
     */
    freePath: string;
    /**
     * 
     * @type {boolean}
     * @memberof Book
     */
    sample: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Book
     */
    bestSeller: boolean;
    /**
     * 
     * @type {number}
     * @memberof Book
     */
    rating: number;
    /**
     * 
     * @type {number}
     * @memberof Book
     */
    reviews: number;
    /**
     * 
     * @type {string}
     * @memberof Book
     */
    iapBookId: string;
    /**
     * 
     * @type {string}
     * @memberof Book
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof Book
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof Book
     */
    url?: string;
    /**
     * 
     * @type {Array<BookCategoriesInner>}
     * @memberof Book
     */
    categories?: Array<BookCategoriesInner>;
}

/**
 * Check if a given object implements the Book interface.
 */
export function instanceOfBook(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "puzzle" in value;
    isInstance = isInstance && "learning" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "publisher" in value;
    isInstance = isInstance && "author" in value;
    isInstance = isInstance && "dateUploaded" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "bookDetailsURL" in value;
    isInstance = isInstance && "path" in value;
    isInstance = isInstance && "icon" in value;
    isInstance = isInstance && "freePath" in value;
    isInstance = isInstance && "sample" in value;
    isInstance = isInstance && "bestSeller" in value;
    isInstance = isInstance && "rating" in value;
    isInstance = isInstance && "reviews" in value;
    isInstance = isInstance && "iapBookId" in value;
    isInstance = isInstance && "status" in value;

    return isInstance;
}

export function BookFromJSON(json: any): Book {
    return BookFromJSONTyped(json, false);
}

export function BookFromJSONTyped(json: any, ignoreDiscriminator: boolean): Book {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'puzzle': json['puzzle'],
        'learning': json['learning'],
        'created': json['created'],
        'publisher': json['publisher'],
        'author': json['author'],
        'dateUploaded': json['dateUploaded'],
        'title': json['title'],
        'bookDetailsURL': json['bookDetailsURL'],
        'path': json['path'],
        'icon': json['icon'],
        'freePath': json['freePath'],
        'sample': json['sample'],
        'bestSeller': json['bestSeller'],
        'rating': json['rating'],
        'reviews': json['reviews'],
        'iapBookId': json['iapBookId'],
        'status': json['status'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'categories': !exists(json, 'categories') ? undefined : ((json['categories'] as Array<any>).map(BookCategoriesInnerFromJSON)),
    };
}

export function BookToJSON(value?: Book | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'puzzle': value.puzzle,
        'learning': value.learning,
        'created': value.created,
        'publisher': value.publisher,
        'author': value.author,
        'dateUploaded': value.dateUploaded,
        'title': value.title,
        'bookDetailsURL': value.bookDetailsURL,
        'path': value.path,
        'icon': value.icon,
        'freePath': value.freePath,
        'sample': value.sample,
        'bestSeller': value.bestSeller,
        'rating': value.rating,
        'reviews': value.reviews,
        'iapBookId': value.iapBookId,
        'status': value.status,
        'password': value.password,
        'url': value.url,
        'categories': value.categories === undefined ? undefined : ((value.categories as Array<any>).map(BookCategoriesInnerToJSON)),
    };
}

