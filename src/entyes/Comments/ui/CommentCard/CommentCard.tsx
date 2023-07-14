import { classNames } from "shared/lib/classNames/classNames"
import cls from "./CommentCard.module.scss"
import { useTranslation } from "react-i18next"
import { memo } from "react"
import { Comment } from "entyes/Comments/model/types/commentTypes"
import { Avatar } from "shared/ui/Avatar/Avatar"
import { Text } from "shared/ui/Text/Text"
import { Skeleton } from "shared/ui/Skeleton/Skeleton"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { RoutePath } from "shared/config/routeConfig/routeConfig"


export interface CommentCardProps{
    className? :string
    comment?:Comment
    isLoading?:boolean
 }



export const CommentCard = memo(({className,comment,isLoading}:CommentCardProps) =>  {

    const {t} = useTranslation()

   if(isLoading){
            return  <div className={classNames(cls.CommentCard,{},[className])}>
                <div className={cls.header}>

                                <Skeleton width={30} height={30} border="50%"/>
                                <Skeleton width={100} height={18} className={cls.username}/>

                </div>
                                <Skeleton className={cls.text}  width="100%" height={30}/>
                </div>
   }

    return (
        <div className={classNames(cls.CommentCard,{},[className])}>
            <AppLink to = {`${RoutePath.profile}${comment?.user.id}`} className={cls.header}>
                  
                           { comment?.user.avatar ? < Avatar size={30} src={comment?.user.avatar} /> : null}
                        

                  <Text title = {comment?.user.username}/>

            </AppLink>
           
            <Text className={cls.text} text={comment?.text}/>
            
        </div>
    )


})