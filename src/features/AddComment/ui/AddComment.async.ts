import { lazy } from "react";

export const AddCommentAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  
  setTimeout(() => resolve(import('./AddComment')), 1500);
}));
