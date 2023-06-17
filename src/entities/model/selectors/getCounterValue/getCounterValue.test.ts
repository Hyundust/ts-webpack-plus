
import { StateScheme } from "app/providers/storeProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import { getCounterValue } from "./getCounterValue";

describe("getCounter function", () => {
    test("should return the counter value from the state when passed the state object with a counter property", () => {
       
        const state: DeepPartial<StateScheme> = {
            counter:{value: 10}
        };
    
        
        const result = getCounterValue(state as StateScheme);
    
        // Assert
        expect(result).toEqual(10);
      });
}
)