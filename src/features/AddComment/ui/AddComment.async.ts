import { lazy } from "react";
import { AddCommentsProps } from "./AddComment";
import { FC } from "react";


export const AddCommentAsync = lazy<FC<AddCommentsProps>>(() => new Promise((resolve) => {
  // @ts-ignore
  
  setTimeout(() => resolve(import('./AddComment')), 1500);
}));
