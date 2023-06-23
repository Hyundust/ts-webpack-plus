
import { StateScheme } from "app/providers/storeProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import { getLoginIsError } from "../selectLoginIsError";

describe("getLoginIsError function", () => {
    test("should return error", () => {
       
        const state: DeepPartial<StateScheme> = {
            loginForm:{
                isError:"error"
            }
        };
    
        
        const result = getLoginIsError(state as StateScheme);
    
        
        expect(result).toEqual("error");
      });
    test("should return underfined", () => {
       
        const state: DeepPartial<StateScheme> = {
            
        };
    
        
        const result = getLoginIsError(state as StateScheme);
    
        
        expect(result).toEqual(undefined);
      });
}
)