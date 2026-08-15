/**
 * Adds additional JavaScript and TypeScript features to MakeCode Arcade,
 * including language features, type checks, string operations, conversions,
 * and other functionality not normally available in Blocks. It also provides
 * additional APIs that make JavaScript and TypeScript development easier.
 * @version 0.0.2
 */
//% weight=100 color=#3178C6 icon=""
namespace TypeScriptExpanded {

    export enum UnknownKind {
        Empty,
        Number,
        String,
        Boolean
    }

    export class UnknownValue {
        kind: UnknownKind

        numberValue: number
        stringValue: string
        booleanValue: boolean

        constructor() {
            this.kind = UnknownKind.Empty
            this.numberValue = 0
            this.stringValue = ""
            this.booleanValue = false
        }
    }

    /**
     * Treats a value as non-null and non-undefined.
     *
     * @typeParam T The type of the value.
     * @param value The value to treat as non-null.
     * @returns The original value with its type preserved.
     *
     * @example
     * let value = TypeScriptExpanded.nonNull(myValue)
     * 
     * @since 0.0.1
     */
    //% blockId=typeScriptExpandedNonNull
    //% block="non-null %value"
    //% blockHidden=true
    //% group="TypeScript Operators"
    //% help=github:TypeScriptExpanded/docs/testdoc
    export function nonNull<T>(value: T): T {
        return value
    }

    /**
     * Returns a fallback value when the given value is null or undefined.
     * @typeParam T The type of the value and fallback.
     * @param value The value to check.
     * @param fallback The value to return when the first value is null or undefined.
     * @returns The original value if it is not null or undefined; otherwise, the fallback value.
     *
     * @example
     * let name = TypeScriptExpanded.nullish(playerName, "Unknown")
     * 
     * @since 0.0.1
     */
    //% blockId=typeScriptExpandedNullish
    //% block="%value ?? %fallback"
    //% group="TypeScript Operators"
    export function nullish<T>(
        value: T | null | undefined,
        fallback: T
    ): T {
        if (value === null || value === undefined) {
            return fallback
        }

        return value
    }
    /**
     * Checks whether a value is null or undefined.
     *
     * @param value The value to check.
     * @returns True if the value is null or undefined; otherwise, false.
     *
     * @since 0.0.2
     */
    //% blockId=typeScriptExpandedisNullish
    //% block="is null or undefined %value"
    //% group="TypeScript Operators"
    export function isNullish(value: any): boolean {
        return value === null || value === undefined
    }
    /**
     * Checks whether a value is defined 
     * 
     * @param value The value to check.
     * @returns True if the value is not undefined; otherwise, false.
     * 
     * @since 0.0.2
     */
    //% blockId=typeScriptExpandedisDefined
    //% block="is defined %value"
    //% group="TypeScript Operators"
    export function isDefined(value: any): boolean {
        return value !== undefined
    }
    /**
     * Safely gets a property from an object.
     *
     * @param object The object to access.
     * @param property The property name to access.
     * @returns The value of the property, or undefined if the object is null or undefined.
     * 
     * @since 0.0.1
     */
    //% blockId=typeScriptExpandedOptionalProperty
    //% block="optional property %property of %object"
    //% property.shadow="text"
    //% property.defl=x
    //% group="TypeScript Operators"
    //% help=github:Crzle0723/TypeScriptExpanded/docs/optionalproperty
    export function optionalProperty(
        object: any,
        property: string
    ): any {
        if (object === null || object === undefined) {
            return undefined
        }

        return object[property]
    }


    /**
     * Checks whether a value is a Sprite.
     * 
     * @param value The value to check.
     * @returns True if the value is a sprite; otherwise false
     * 
     * @since 0.0.1
     * 
     * @see isArray
     * @see isBoolean
     * @see isNumber
     * @see NaN
     * @see isString
     */
    //% blockId=typeScriptExpandedIsSprite
    //% block="%value is a Sprite"
    //% group="Type Checks"
    export function isSprite(value: any): boolean {
        return value instanceof Sprite
    }

    /**
     * Checks whether a value is an array.
     * @param value The value to check.
     * @returns True if the value is an array; false otherwise
     * 
     * @since 0.0.1
     * 
     * @see NaN
     * @see isBoolean
     * @see isNumber
     * @see isSprite
     * @see isString
     */
    //% blockId=typeScriptExpandedIsArray
    //% block="%value is an array"
    //% group="Type Checks"
    export function isArray(value: any): boolean {
        return Array.isArray(value)
    }
    /**
     * Checks whether a value is a string.
     *
     * @param value The value to check.
     * @returns True if the value is a string; otherwise, false.
     *
     * @since 0.0.2
     * @see isArray
     * @see isBoolean
     * @see isNumber
     * @see isSprite
     * @see isNaN
     */
    //% blockId=typeScriptExpandedIsString
    //% block="%value is a string"
    //% group="Type Checks"
    export function isString(value: any): boolean {
        return typeof value === "string"
    }

    /**
    * Checks whether a value is a number.
    *
    * @param value The value to check.
    * @returns True if the value is a number; otherwise, false.
    *
    * @since 0.0.2
    *
    * @see isArray
    * @see isBoolean
    * @see NaN
    * @see isSprite
    * @see isString
    */
    //% blockId=typeScriptExpandedIsNumber
    //% block="%value is a number"
    //% group="Type Checks"
    export function isNumber(value: any): boolean {
        return typeof value === "number"
    }
    /**
     * Checks whether a value is a boolean.
     *
     * @param value The value to check.
     * @returns True if the value is a boolean; otherwise, false.
     *
     * @since 0.0.2
     * 
     * @see isArray
     * @see isNaN
     * @see isNumber
     * @see isSprite
     * @see isString
     */
    //% blockId=typeScriptExpandedIsBoolean
    //% block="%value is a boolean"
    //% group="Type Checks"
    export function isBoolean(value: any): boolean {
        return typeof value === "boolean"
    }

    /**
     * Checks whether a value is NaN (Not a Number)
     * 
     * @param value The value to check.
     * @returns True if the value is NaN; otherwise, false.
     * 
     * @since 0.0.2
     * 
     * @see isArray
     * @see isBoolean
     * @see isNumber
     * @see isSprite
     * @see isString 
     */
    export function isNaN(value: any): boolean {
        return Number.isNaN(value)
    }


    /**
     * Checks whether an array contains a value.
     *
     * @typeParam T The type of the array elements.
     * @param array The array to search.
     * @param value The value to look for.
     * @returns True if the array contains the value.
     * 
     * @since 0.0.1
     */
    //% blockId=typeScriptExpandedArrayIncludes
    //% block="%array includes %value"
    //% group="Arrays"
    export function arrayIncludes<T>(
        array: T[],
        value: T
    ): boolean {
        return array.indexOf(value) !== -1
    }

    /**
     * Gets the index of a value in an array.
     *
     * @typeParam T The type of the array elements.
     * @param array The array to search.
     * @param value The value to find.
     * @returns The index of the value, or -1 if it is not found.
     *
     * @since 0.2
     */
    //% blockId=typeScriptExpandedArrayIndexOf
    //% block="index of %value in %array"
    //% group="Arrays"
    export function arrayIndexOf<T>(array: T[], value: T): number {
        return array.indexOf(value)
    }

    /**
     * Checks whether a string starts with the specified text.
     * @param text The string to search.
     * @param search The text to look for at the beginning.
     * @returns True if the string starts with the other string; otherwise false
     * 
     * @since 0.0.1
     * 
     * @see stringEndsWith
     * @see stringIncludes
     */
    //% blockId=typeScriptExpandedStringStartsWith
    //% block="%text starts with %search"
    //% group="Strings"
    export function stringStartsWith(
        text: string,
        search: string
    ): boolean {
        return text.indexOf(search) === 0
    }

    /**
     * Checks whether a string ends with the specified text.
     * @param text The string to search.
     * @param search The text to look for at the end.
     * @returns True if the string ends with other string; otherwise false
     * 
     * @since 0.0.1
     * @see stringStartsWith
     * @see stringIncludes
     */
    //% blockId=typeScriptExpandedStringEndsWith
    //% block="%text ends with %search"
    //% group="Strings"
    export function stringEndsWith(
        text: string,
        search: string
    ): boolean {
        if (search.length > text.length) {
            return false
        }

        let start = text.length - search.length

        for (let i = 0; i < search.length; i++) {
            if (text.charAt(start + i) != search.charAt(i)) {
                return false
            }
        }

        return true
    }

    /**
     * Checks whether a string contains the specified text.
     * @param text The string to search.
     * @param search The text to look for.
     * @returns True if the string includes other string; otherwise false
     * 
     * @since 0.0.1
     * 
     * @see stringStartsWith
     * @see stringEndsWith
     */
    //% blockId=typeScriptExpandedStringIncludes
    //% block="%text includes %search"
    //% group="Strings"
    export function stringIncludes(
        text: string,
        search: string
    ): boolean {
        return text.indexOf(search) !== -1
    }


    /**
     * Converts a value to a string.
     * @param value The value to convert.
     * @returns returns the value as a string
     * 
     * @since 0.0.1
     */
    //% blockId=typeScriptExpandedString
    //% block="String(%value)"
    //% group="Conversions & Numbers"
    export function toString(value: any): string {
        return "" + value
    }

    /**
     * Converts a value to a boolean.
     * @param value The value to convert.
     * @returns returns the boolean value of the value inputted
     * 
     * @since 0.0.1
     */
    //% blockId=typeScriptExpandedBoolean
    //% block="Boolean(%value)"
    //% group="Conversions & Numbers"
    export function toBoolean(value: any): boolean {
        return !!value
    }


    /**
     * Represents an infinite value.
     * @returns The positive infinity value.
     * 
     * @since 0.0.1
     * 
     * @see negativeInfinity
     * @see isFinite
     */
    //% blockId=typeScriptExpandedInfinity
    //% block="infinity"
    //% group="Conversions & Numbers"
    export function infinity(): number {
        return Infinity
    }

    /**
     * Represents a negative infinite value.
     * @returns The negative infinity value.
     * 
     * @since 0.0.1
     * 
     * @see infinity
     * @see isFinite
     */
    //% blockId=typeScriptExpandedNegativeInfinity
    //% block="negative infinity"
    //% group="Conversions & Numbers"
    export function negativeInfinity(): number {
        return -Infinity
    }

    /**
     * Checks whether a number is finite.
     *
     * @param value The number to check.
     * @returns True if the number is finite; otherwise, false.
     * 
     * @since 0.0.1
     * 
     * @see negativeInfinity
     * @see positiveInfinity
     */
    //% blockId=typeScriptExpandedIsFinite
    //% block="is finite %value"
    //% group="Conversions & Numbers"
    export function isFinite(value: number): boolean {
        return value < Infinity && value > -Infinity
    }



    /**
     * Checks whether a number is an integer.
     *
     * @param value The number to check.
     * @returns True if the value is an integer; otherwise, false.
     * 
     * @since 0.0.1
     * @see isFloat
     */
    //% blockId=typeScriptExpandedIsInteger
    //% block="is integer %value"
    //% group="Conversions & Numbers"
    export function isInteger(value: number): boolean {
        return value == Math.floor(value)
    }
    /**
     * Checks whether a number has a fractional part.
     *
     * @param value The number to check.
     * @returns True if the number has a fractional part; otherwise, false.
     * 
     * @since 0.0.1
     * @see isInteger
     */
    //% blockId=typeScriptExpandedIsFloat
    //% block="is float %value"
    //% group="Conversions & Numbers"
    export function isFloat(value: number): boolean {
        return value != Math.floor(value)
    }

    /**
     * Repeats a string a specified number of times.
     *
     * @param text The string to repeat.
     * @param count The number of times to repeat the string.
     * @returns A new string containing the repeated text.
     * 
     * @since 0.0.1
     */
    //% blockId=typeScriptExpandedStringRepeat
    //% block="%text repeat %count times"
    //% group="Strings"
    export function stringRepeat(
        text: string,
        count: number
    ): string {
        let result = ""

        for (let i = 0; i < count; i++) {
            result += text
        }

        return result
    }

    /**
     * Adds padding to the beginning of a string until it reaches a specified length.
     * @param text The string to pad.
     * @param length The target length.
     * @param padding The text to use as padding.
     * @returns the string and the padding
     * 
     * @since 0.0.1
     */
    //% blockId=typeScriptExpandedStringPadStart
    //% block="%text pad start to %length with %padding"
    //% group="Strings"
    export function stringPadStart(
        text: string,
        length: number,
        padding: string
    ): string {
        if (padding.length == 0 || text.length >= length) {
            return text
        }

        let result = text

        while (result.length < length) {
            result = padding + result
        }

        return result.substr(result.length - length)
    }

    /**
     * Adds padding to the end of a string until it reaches a specified length.
     * @param text The string to pad.
     * @param length The target length.
     * @param padding The text to use as padding.
     * @returns the string and the padding
     * 
     * @since 0.0.1
     */
    //% blockId=typeScriptExpandedStringPadEnd
    //% block="%text pad end to %length with %padding"
    //% group="Strings"
    export function stringPadEnd(
        text: string,
        length: number,
        padding: string
    ): string {
        if (padding.length == 0 || text.length >= length) {
            return text
        }

        let result = text

        while (result.length < length) {
            result += padding
        }

        return result.substr(0, length)
    }

    /**
     * Removes whitespace from the beginning of a string.
     * @param text The string to trim.
     * @returns the string without the whitespace at the beginning
     * 
     * @since 0.0.1
     */
    //% blockId=typeScriptExpandedStringTrimStart
    //% block="trim start of %text"
    //% group="Strings"
    export function stringTrimStart(text: string): string {
        let start = 0

        while (start < text.length && " \t\r\n".indexOf(text.charAt(start)) >= 0) {
            start++
        }

        return text.substr(start)
    }

    /**
     * Removes whitespace from the end of a string.
     * @param text The string to trim.
     * @returns the string without the whitespace at the end
     * 
     * @since 0.0.1
     */
    //% blockId=typeScriptExpandedStringTrimEnd
    //% block="trim end of %text"
    //% group="Strings"
    export function stringTrimEnd(text: string): string {
        let end = text.length

        while (end > 0 && " \t\r\n".indexOf(text.charAt(end - 1)) >= 0) {
            end--
        }

        return text.substr(0, end)
    }

    /**
     * Create a unknown value 
     * @returns A new value with no assigned type
     * 
     * @since 0.0.1
     */
    //% blockId=typeScriptExpandedcreateUnknown
    //% block="create unknown value"
    //% group="Unknown → Create"
    export function createUnknown(): UnknownValue {
        return new UnknownValue()
    }
    /**
     * set an unknown value to a number 
     * @param value the unknown value to set 
     * @param number the number to set the value
     * 
     * @since 0.0.1
     * 
     * @see getUnknownNumber
     */
    //% blockId=typeScriptExpandedsetUnknownNumber
    //% block="set unknown %value to number %number"
    //% group="Unknown → Set"
    export function setUnknownNumber(
        value: UnknownValue,
        number: number
    ): void {
        value.kind = UnknownKind.Number
        value.numberValue = number
    }
    /**
     * set an unknown value to a string
     * @param value the unknown value to set
     * @param string the string to set the value
     * 
     * @since 0.0.1
     * 
     * @see getUnknownString
     */
    //% blockId=typeScriptExpandedsetUnknownString
    //% block="set unknown %value to string %string"
    //% group="Unknown → Set"
    export function setUnknownString(
        value: UnknownValue,
        string: string
    ): void {
        value.kind = UnknownKind.String
        value.stringValue = string
    }
    /**
     * set an unknown value to a boolean
     * @param value the unknown value to set
     * @param boolean the boolean to set the value
     * 
     * @since 0.0.1
     * @see getUnknownBoolean
     */
    //% blockId=typeScriptExpandedsetUnknownBoolean
    //% block="set unknown %value to boolean %boolean"
    //% group="Unknown → Set"
    export function setUnknownBoolean(
        value: UnknownValue,
        boolean: boolean
    ): void {
        value.kind = UnknownKind.Boolean
        value.booleanValue = boolean
    }
    /**
     * clear an unknown value
     * @param value the unknown value to clear
     * 
     * @since 0.0.1
     */
    //% blockId=typeScriptExpandedclearUnknown
    //% block="clear unknown %value"
    //% group="Unknown → Set"
    export function clearUnknown(value: UnknownValue): void {
        value.kind = UnknownKind.Empty
    }
    /**
     * check if an unknown value is a number
     * @param value the value to check 
     * @returns True if the unknown value is a number; otherwise false
     * 
     * @since 0.0.1
     * 
     * @see unknownIsString
     * @see unknownIsBoolean
     * @see unknownIsEmpty
     */
    //% blockId=typeScriptExpandedunknownIsNumber
    //% block="%value is a number"
    //% group="Unknown → Type Checks"
    export function unknownIsNumber(value: UnknownValue): boolean {
        return value.kind == UnknownKind.Number
    }
    /**
     * check if an unknown value is a string 
     * @param value the value to check 
     * @returns True if the value is a string; otherwise, false.
     * 
     * @since 0.0.1
     * 
     * @see unknownIsNumber 
     * @see unknownIsBoolean
     * @see unknownIsEmpty
     */
    //% blockId=typeScriptExpandedunknownIsString
    //% block="%value is a string"
    //% group="Unknown → Type Checks"
    export function unknownIsString(value: UnknownValue): boolean {
        return value.kind == UnknownKind.String
    }
    /**
     * check if an unknown value is a boolean
     * @param value the value to check
     * @returns True if the value is a boolean; otherwise, false.
     * 
     * @since 0.0.1
     * 
     * @see unknownIsNumber
     * @see unknownIsString
     * @see unknownIsEmpty
     */
    //% blockId=typeScriptExpandedunknownIsBoolean
    //% block="%value is a boolean"
    //% group="Unknown → Type Checks"
    export function unknownIsBoolean(value: UnknownValue): boolean {
        return value.kind == UnknownKind.Boolean
    }
    /**
     * check if an unknown value is a empty
     * @param value the value to check
     * @returns True if the value is a empty; otherwise, false.
     * 
     * @since 0.0.1
     * @see unknownIsNumber
     * @see unknownIsString
     * @see unknownIsBoolean
     */
    //% blockId=typeScriptExpandedunknownIsEmpty
    //% block="%value is empty"
    //% group="Unknown → Type Checks"
    export function unknownIsEmpty(value: UnknownValue): boolean {
        return value.kind == UnknownKind.Empty
    }
    /**
     * get an unknown variable's number value
     * @param value the value to get
     * @returns returns the unknown variable's number value
     * 
     * @since 0.0.1
     * 
     * @see setUnknownNumber
     */
    //% blockId=typeScriptExpandedgetUnknownNumber
    //% block="get number from unknown %value"
    //% group="Unknown → Get"
    export function getUnknownNumber(value: UnknownValue): number {
        return value.numberValue
    }
    /**
     * get an unknown variable's string value
     * @param value the value to get
     * @returns returns the unknown variable's string value
     * 
     * @since 0.0.1
     * 
     * @see setUnknownString
     */
    //% blockId=typeScriptExpandedgetUnknownString
    //% block="get string from unknown %value"
    //% group="Unknown → Get"
    export function getUnknownString(value: UnknownValue): string {
        return value.stringValue
    }
    /**
     * get an unknown variable's boolean value
     * @param value the value to get
     * @returns returns the unknown variable's boolean value
     * 
     * @since 0.0.1
     * 
     * @see setUnknownBoolean
     */
    //% blockId=typeScriptExpandedgetUnknownBoolean
    //% block="get boolean from unknown %value"
    //% group="Unknown → Get"
    export function getUnknownBoolean(value: UnknownValue): boolean {
        return value.booleanValue
    }
    /**
     * get an unknown variable's type
     * @param value the value to check
     * @returns returns the unknown variable's type
     * 
     * @since 0.0.1
     */
    //% blockId=typeScriptExpandedunknownType
    //% block="unknown type of %value"
    //% group="Unknown → Info"
    export function unknownType(value: UnknownValue): UnknownKind {
        return value.kind
    }

    /**
     * Creates a copy of an unknown value.
     *
     * @param value The unknown value to copy.
     * @returns A new unknown value containing the same type and value.
     *
     * @since 0.0.1
     */
    //% blockId=typeScriptExpandedCopyUnknown
    //% block="copy unknown %value"
    //% group="Unknown → Other"
    export function copyUnknown(value: UnknownValue): UnknownValue {
        let result = new UnknownValue()

        result.kind = value.kind
        result.numberValue = value.numberValue
        result.stringValue = value.stringValue
        result.booleanValue = value.booleanValue

        return result
    }

}