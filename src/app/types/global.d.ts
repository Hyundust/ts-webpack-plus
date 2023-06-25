// Declare that any ".scss" file can have a key-value interface of class names.
declare module '.scss'{
    type IClassNames = Record<string, string>
    // Declare that "classNames" is of type IClassNames and export it.
    const classNames: IClassNames
    export = classNames
}

// Declare that any SVG file is of type React.FunctionComponent<React.SVGAttributes<SVGElement>>.
declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    // Export the default content.
    export default content
}

// Declare the constant "__IS_DEV__" as boolean.
declare const __IS_DEV__: boolean
declare const __API__: string
