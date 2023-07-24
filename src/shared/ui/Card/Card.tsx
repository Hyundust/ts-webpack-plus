import { classNames } from 'shared/lib/classNames/classNames';
import { HtmlHTMLAttributes, ReactNode, memo, useCallback } from 'react';
import cls from './Card.module.scss'

export enum CardTheme{
    NORMAL = "normal",
    OUTLINED = "outlined"

}
interface CardProps extends HtmlHTMLAttributes<HTMLDivElement>{
    className?: string;
    children?:ReactNode;
    theme?:CardTheme;
}

export const Card = memo((props: CardProps ) => {
    const  {
            className,
            children,
            theme = CardTheme.NORMAL,
            ...otherProps
           } = props


     return (

        <div className={classNames(cls.Card, {}, [className,cls[theme]])}
        {...otherProps}>
                            {children}
        </div> 



     )

})
