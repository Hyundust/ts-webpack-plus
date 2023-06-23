
import { StateScheme } from "app/providers/storeProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import { getLoginUsername } from "../selectLoginUsername";


describe("getLoginIsError function", () => {
    test("should return 123", () => {
       
        const state: DeepPartial<StateScheme> = {
            loginForm:{
                username:"123"
            }
        };
    
        
        const result = getLoginUsername(state as StateScheme);
    
        
        expect(result).toEqual("123");
      });

    test("should return underfined", () => {
       
        const state: DeepPartial<StateScheme> = {
            
        };
    
        
        const result = getLoginUsername(state as StateScheme);
    
        
        expect(result).toEqual("");
      });
}
)