"use strict";

var MIQ = {};

MIQ.Array = {

    /**
     * Returns the index of the specified item within the given array.
     *
     * @param   {Array}     arr
     * @param   {Object}    item
     * @returns {Number}
     */
    getItemIndex: function( arr, item ) {

    },

    /**
     * Returns the largest number in an array of numbers, or the highest
     * alphabetically-placed item in an array of strings.
     *
     * @param   {Array}     arr
     * @returns {Object}
     */
    getHighestValueItem: function( arr ) {

    },

    /**
     * Returns a hash map of occurrance counts for each item, using the item
     * itself as the key.
     *
     * @param   {Array}     arr
     * @returns {Object}
     */
    getMapOfOccurrances: function( arr ) {

    }

};

MIQ.String = {

    /**
     * Concatenates all arguments, using the last as the delimiter.
     *
     * @returns {string}
     */
    concatenate: function() {

    }

};

MIQ.Object = {

    /**
     * Serialises all properties of an object to a string – should not include
     * inherited properties.
     *
     * @param   {Object}    obj
     * @returns {String}
     */
    serialisePropertiesWithValues: function( obj ) {

    },

    /**
     * Extends one object with another.
     *
     * @param superClass
     * @param ext
     * @returns {{}}
     */
    extend: function( cls, superCls, ext ) {

    }

};

MIQ.Function = {

    /**
     * Executes a function, given a context and passes the remaining arguments
     * to the function call.
     *
     * @param   {Function}  fn
     * @param   {Object}    context
     *
     * @returns {Object}
     */
    execute: function( fn, context ) {

    },

    /**
     * Decorates a simple function to exclaim how much something is loved.
     *
     * @param   {String}    message
     * @param   {Function}  fn
     * @returns {String}
     */
    decorate: function( message, fn ) {

    }

};

MIQ.Data = {

    /**
     * Filters an array of objects based on the key-value map passed in. Should
     * support matching an exact value, or matching on a min and max for
     * numeric values.
     *
     * @param   {Array}     items
     * @param   {Object}    map
     * @returns {Array}
     */
    filter: function( items, map ) {

    }

};

MIQ.Module = {

    /**
     * Creates a basic stub module that logs someone's favourite thing.
     *
     * @param   {String}  person
     * @param   {String}  favourite
     * @returns {Object}
     */
    createModule: function( person, favourite ) {

    }

};

MIQ.Event = {

    /**
     * Binds an event-handling object to a DOM element's corresponding events.
     *
     * @param {HTMLElement} element
     * @param {String}      eventType
     * @param {Object}      handler
     */
    bindEvent: function( element, eventType, handler ) {

    }

};

MIQ.Algo = {

    /**
     * Generates a Fibonacci sequence of the specified length.
     *
     * @param   {Number}    len
     * @returns {Array}
     */
    fibonacci: function( len ) {

    }

};

MIQ.Util = {

    /**
     * Detects presence of touch capability.
     *
     * @returns {Boolean}
     */
    detectTouch: function() {

    },

    /**
     * Adds class(es) to a DOM element. Allows a string with a single class, a
     * string containing multiple classes, separated by a space, or an array
     * of classes.
     *
     * @param {HTMLElement}     element
     * @param {Array|String}    classes
     */
    addClass: function( element, classes ) {
        
    }

};