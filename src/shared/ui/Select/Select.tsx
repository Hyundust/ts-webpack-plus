import { Mods, classNames } from "shared/lib/classNames/classNames"
import cls from "./Select.module.scss"
import { ChangeEvent, memo, useMemo } from "react"

// Defining interface for SelectOptions
interface SelectOptions {
   value: string,
   content: string
}

// Defining interface for the Select component
export interface SelectProps{
    className?: string,
    label?: string,
    options?: SelectOptions[],
    value?: string,
    onChange?: (value:string) => void
    readonly?:boolean
}

// Defining the Select component and passing props to it
export const Select = memo((props: SelectProps) =>  {

    // Destructuring props to fetch the required values
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly
    } = props

    // Defining Mods object which will be empty initially
    const mods: Mods = {}

    // Using useMemo hook to return the options list and invoking it only when the options prop changes
    const optionList = useMemo(()=> {
        return options?.map((item)=>(
            <option className= {cls.option} key={item.value} value={item.value}>{item.content}</option>
        ))
    }, [options])
   
    // Defining a function to handle the selection event
    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>)=> {
        onChange?.(e.target.value);
    }

    // Rendering the Select component with appropriate classes and HTML elements
    return (
        <div className={classNames(cls.WrapperSelect, mods, [className])}>
            {label && 
                <span className={cls.label}>{`${label}>`}</span>}
            <select className={cls.select} value={value} onChange={onChangeHandler} disabled = {readonly}>
                {optionList}
            </select>
        </div>
    )
})
