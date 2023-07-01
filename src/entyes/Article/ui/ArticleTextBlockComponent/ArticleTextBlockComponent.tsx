import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticleTextBlockComponent.module.scss"
import { useTranslation } from "react-i18next"
import { ModuleLoad, ReducerList } from "shared/lib/components/ModLoader/ModuleLoader"
import { articleReducer } from "entyes/Article/model/slice/articleSlice"

export interface ArticleTextBlockComponentProps{
    className?: string
 }

const reducers:ReducerList = {
    articleDetails:articleReducer
}

export const ArticleTextBlockComponent = ({className}:ArticleTextBlockComponentProps) =>  {

    const {t} = useTranslation()

   

    return (
        <ModuleLoad reducers={reducers} removeAfterUnMount = {true}>
        <div className={classNames(cls.ArticleTextBlock,{},[className])}>
                
        </div>

        </ModuleLoad>
    )


}