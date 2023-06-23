
import { StateScheme } from "app/providers/storeProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import { getLoginPassword } from "../selectLoginPassword";


describe("getLoginIsError function", () => {
    test("should return 123", () => {
       
        const state: DeepPartial<StateScheme> = {
            loginForm:{
                password:"123"
            }
        };
    
        
        const result = getLoginPassword(state as StateScheme);
    
        
        expect(result).toEqual("123");
      });

    test("should return underfined", () => {
       
        const state: DeepPartial<StateScheme> = {
            
        };
    
        
        const result = getLoginPassword(state as StateScheme);
    
        
        expect(result).toEqual("");
      });
}
)