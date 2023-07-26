import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticalDetailsPageHeader.module.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {memo} from "react";
import { useCallback } from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { getIfCanEdit } from "pages/ArticalDetailsPage/model/selector/editAvailSelector";
import { getArticleDetailsData, getArticleDetailsError } from "entyes/Article/model/selector/getArticleDetails";


export interface ArticalDetailsPageHeaderProps{
    className?:string
    
 }



export const ArticalDetailsPageHeader = memo(({className}:ArticalDetailsPageHeaderProps) =>  {

    const {t} = useTranslation()
    const navigate = useNavigate();
    const answer = useSelector(getIfCanEdit)
    const article = useSelector(getArticleDetailsData)
   
    const onBackToList = useCallback(()=>{
        navigate(RoutePath.articals)
    },[navigate])
    

    const onEditArticle = useCallback(()=>{
        navigate(`${RoutePath.articals_details}${article?.id}/edit`)
    },[navigate,article?.id])



    return (
        <div className={classNames(cls.ArticalDetailsPageHeader,{},[className])}>
                    <Button 
                                theme={ThemeButton.OUTLINE} 
                                onClick={onBackToList}>
                                        {t("Back")}
                    </Button>
                    {answer && <Button     className={cls.editBtn}
                                theme={ThemeButton.OUTLINE} 
                                onClick={onEditArticle}>
                                        {t("Edit")}
                    </Button>}
                    
        </div>
    )


})