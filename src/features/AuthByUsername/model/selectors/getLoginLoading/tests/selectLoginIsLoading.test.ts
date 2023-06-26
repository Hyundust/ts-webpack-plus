
import { StateScheme } from "app/providers/storeProvider";
import { getLoginLoading } from "../selectLoginLoading";

describe("getLoginIsError function", () => {
    test("should return true", () => {
       
        const state: DeepPartial<StateScheme> = {
            loginForm:{
                isLoading:true
            }
        };
    
        
        const result = getLoginLoading(state as StateScheme);
    
        
        expect(result).toEqual(true);
      });
    test("should return underfined", () => {
       
        const state: DeepPartial<StateScheme> = {
            
        };
    
        
        const result = getLoginLoading(state as StateScheme);
    
        
        expect(result).toEqual(false);
      });
}
)