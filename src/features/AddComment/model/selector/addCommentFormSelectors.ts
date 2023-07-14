import { StateScheme } from "app/providers/storeProvider";


export const getCommentsText =  ((state:StateScheme)=>state?.addComment?.text);
export const getCommentsError =  ((state:StateScheme)=>state?.addComment?.error);
