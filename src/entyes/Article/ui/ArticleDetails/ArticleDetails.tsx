import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticleDetails.module.scss"
import { useTranslation } from "react-i18next"
import { ReducerList } from "shared/lib/components/ModLoader/ModuleLoader"
import { articleReducer } from "entyes/Article/model/slice/articleSlice"
import { ModuleLoad } from "shared/lib/components/ModLoader/ModuleLoader"
import { memo, useEffect } from "react"
import { TextAlign } from "shared/ui/Text/Text"
import { Text } from "shared/ui/Text/Text"
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch"
import { fetchArticleById } from "entyes/Article/model/services/fetchArticalById"
import { useSelector } from "react-redux"
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from "entyes/Article/model/selector/getArticleDetails"
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent"
import { useCallback } from "react"
import { Avatar } from "shared/ui/Avatar/Avatar"
import { ArticleBlock } from "entyes/Article/model/types/article"
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent"
import { ArticleImgBlockComponent } from "../ArticleImgBlockComponent/ArticleImgBlockComponent"
import { ArticleBlockType } from "entyes/Article/model/types/article"
import { Skeleton } from "shared/ui/Skeleton/Skeleton"
import { TextSize } from "shared/ui/Text/Text"
import { Icon } from "shared/ui/Icon/Icon"
import EyeIcon from "shared/assets/icons/eye-20-20.svg"
import CalendarIcon from "shared/assets/icons/calendar-20-20.svg"
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect"



export interface ArticleDetailsProps{
    className?: string
    id?:string
 }


 const reducers:ReducerList = {
    articleDetails:articleReducer
 }

export const ArticleDetails = memo(({className,id}:ArticleDetailsProps) =>  {

    const {t} = useTranslation()
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);


    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImgBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        default:
            return null;
        }
    }, []);

    useInitialEffect(()=>{
        dispatch(fetchArticleById(id || ""));
    })
    
    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t("Something went wrong.Try again")|| ""}
            />
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={cls.avatar}
                    />
                </div>
                <Text
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={EyeIcon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={CalendarIcon} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <ModuleLoad reducers={reducers} removeAfterUnMount = {true}>
         <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </ModuleLoad>
    )


})