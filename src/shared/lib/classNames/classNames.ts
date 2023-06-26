// Define a type Mods as a Record with string keys and boolean/string values
export type Mods = Record<string, boolean | string | undefined>

/**
 * A function to generate a class name string from a base class name,
 * an object of modifier classes, and an array of additional classes.
 * Returns a string that concatenates all the classes together with spaces in between.
 *
 * @param cls - The base class name string.
 * @param mods - An object of modifier classes with boolean/string values.
 * @param additional - An array of additional class names.
 * @returns A string containing all the class names concatenated together.
 */
export function classNames (cls: string, mods: Mods = {}, additional: Array<string | undefined>): string {
    return [
        cls, // Add the base class to the beginning of the array.
        ...additional.filter(Boolean), // Spread the additional classes array into the array.
        ...Object.entries(mods) // Convert the object into an array of [key, value] pairs.
            .filter(([, value]) => Boolean(value)) // Filter out entries with falsy (false, 0, "", null, undefined, NaN) values.
            .map(([classNames]) => classNames) // Extract only the class name strings from the remaining entries.
    ].join(' ') // Concatenate all the strings with a space character in between.
}

// Call the function with arguments to generate a class name string.
classNames('remove-btn', { selectable: true, red: true }, ['pdg'])
