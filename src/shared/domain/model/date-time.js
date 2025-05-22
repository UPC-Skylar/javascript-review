import {ValidationError} from "./errors.js";

/**
 * DateTime value object
 */
export class DateTime {
    /**
     * Instantiate a DataTime object.
     * @param date {Date | String} - Date object or date string
     * @throws {ValidationError} - If the date is invalid
     */
    //Si no me pasa nada seria un 'new Date'
    constructor(date = new Date()){
        const parsedDate = date instanceof Date ? date : new Date();
        if(isNaN(parsedDate.getTime())) throw new ValidationError(`Invalid date: ${date}`);
        this._date = parsedDate;
    }

    /**
     * Get the date.
     * @returns {Date} - The date object
     */
    get date(){
        return this._date;
    }

    toISOString(){return this._date.toISOString();}

    /**
     * Get the date in human-readable format.
     * @returns {string}
     */
    toString(){
        return this._date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    }

    /**
     * Compare two DateTime objects for equality
     * @param other {DateTime} - The other DateTime object to compare
     * @returns {boolean} - True if the two DateTime objects are equal, false otherwise
     */

    equals(other){
        return other instanceof DateTime && this._date.getTime() === other._date.getTime();
    }
}