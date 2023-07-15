import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AddComment.module.scss";
import { useTranslation } from "react-i18next";
import { CustomInput } from "shared/ui/CstmInpt/CustomInput";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/UseAppDispatch";
import { getCommentsText, getCommentsError } from "../model/selector/addCommentFormSelectors";
import { useCallback } from "react";
import { addCommentFormActions, addCommentFormReducer } from "../model/slice/addCommentFormSlice";
import { ModuleLoad, ReducerList } from "shared/lib/components/ModLoader/ModuleLoader";
import { TextAlign } from "shared/ui/Text/Text";
import { Text } from "shared/ui/Text/Text";

export interface AddCommentsProps {
  className?: string;
  onSetComment: (text: string) => void;
}

const reducers: ReducerList = {
  addComment: addCommentFormReducer,
};

const AddCommentsForm = ({ className, onSetComment }: AddCommentsProps) => {
  const { t } = useTranslation();
  const text = useSelector(getCommentsText);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const onCommentSet = useCallback(() => {
    onSetComment(text || "");
    onCommentTextChange("");
    
    
  }, [onSetComment, onCommentTextChange,text]);

  const comError = useSelector(getCommentsError);

  if (comError) {
    return (
      <Text align={TextAlign.CENTER} title={t("Something went wrong. Try again") || ""} />
    );
  }

  return (
    <ModuleLoad reducers={reducers}>
                <div className={classNames(cls.AddComments, {}, [className])}>
                    <CustomInput
                            className={cls.input}
                            placeholder={t("Add your comment") || ""}
                            value={text}
                            onChange={onCommentTextChange}
                    />
                    <Button theme={ThemeButton.OUTLINE} 
                            onClick={onCommentSet}>
                                {t("Sent") || ""}
                    </Button>
                </div>
                </ModuleLoad>
  );
};

export default AddCommentsForm;
