import { classNames } from "shared/lib/classNames/classNames"
import cls from "./CommentCard.module.scss"
import { useTranslation } from "react-i18next"
import { memo } from "react"
import { Comment } from "entyes/Comments/model/types/commentTypes"
import { Avatar } from "shared/ui/Avatar/Avatar"
import { Text } from "shared/ui/Text/Text"


export interface CommentCardProps{
    className? :string
    comment?:Comment
    isLoading?:boolean
 }



export const CommentCard = memo(({className,comment,isLoading}:CommentCardProps) =>  {

    const {t} = useTranslation()

   

    return (
        <div className={classNames(cls.CommentCard,{},[className])}>
            <div className={cls.header}>
                    <Avatar size = {30}/>
                    <Text title = {comment?.user.username}/>

            </div>
           
            <Text className={cls.text} text={comment?.text}/>
            
        </div>
    )


})