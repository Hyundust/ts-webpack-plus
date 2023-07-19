import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ArticleListItem.module.scss"
import { useTranslation } from "react-i18next"
import { ArticleView } from "entyes/Article/model/types/article"
import { Text } from "shared/ui/Text/Text"
import { Card } from "shared/ui/Card/Card"
import { memo} from "react"

import { Button } from "shared/ui/Button/Button"
import { ThemeButton } from "shared/ui/Button/Button"
import { Skeleton } from "shared/ui/Skeleton/Skeleton"

export interface ArticleListItemSkeletonProps{
    className?:string
    view:ArticleView
 }



 export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;
    const { t } = useTranslation();


  
    if (view === ArticleView.BIG) {

        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton  border = "50%" height={30} width={30}/>
                        <Skeleton width = {150} height = {16} className={cls.username} />
                        <Skeleton width = {150} height = {16} className={cls.date} />
                    </div>
                    <Skeleton width = {250} height = {24} className={cls.title} />
                    
                    <Skeleton width = {200}  className={cls.img}  />
                    
                    <div className={cls.footer}>
                        <Skeleton width = {200} height = {36}/>
                        
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card} >
                <div className={cls.imageWrapper}>
                    <Skeleton width={200} height={200} className={cls.img} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16}  />
                </div>
                <Skeleton height={16} width={150} className={cls.title} />
            </Card>
        </div>
    );
});
