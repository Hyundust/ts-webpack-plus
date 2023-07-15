import { classNames } from "shared/lib/classNames/classNames"
import cls from "./CommentItem.module.scss"
import { useTranslation } from "react-i18next"
import {memo} from "react"
import { Text } from "shared/ui/Text/Text"
import { CommentCard } from "../CommentCard/CommentCard"
import { Comment } from "entyes/Comments/model/types/commentTypes"

export interface CommentItemProps{
    className?:string
    comments?:Comment[]
    isLoading?:boolean
    isError?:string
 }



export const CommentItem = memo((props:CommentItemProps) =>  {
    const {
        className,
        comments,
        isLoading,
     } = props


    const {t} = useTranslation()

    if (isLoading) {
      return (
          <div className={classNames(cls.CommentList, {}, [className])}>
              <CommentCard isLoading />
              <CommentCard isLoading />
              <CommentCard isLoading />
          </div>
      );
  }

    return (
        <div className={classNames(cls.CommentItem, {}, [className])}>
        {comments?.length ? (
          comments.map((comment) => (
             <CommentCard comment={comment} className={cls.comment} isLoading={isLoading}/>
          ))
        ) : (
          <Text text={t("There is no comments at the moment") || ""} />
        )}
      </div>
      
    )


})