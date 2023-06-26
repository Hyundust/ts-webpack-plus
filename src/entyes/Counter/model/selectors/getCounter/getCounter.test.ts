import { StateScheme } from "app/providers/storeProvider";
import { getCounter } from "./getCounter";


describe("getCounter function", () => {
test("should return the counter value from the state when passed the state object with a counter property", () => {
   
    const state: DeepPartial<StateScheme> = {
        counter:{value: 10}
    };

    
    const result = getCounter(state as StateScheme);

    // Assert
    expect(result).toEqual({value:10});
  });

  test("should return undefined when passed the state object without a counter property", () => {
    // Arrange
    const state: DeepPartial<StateScheme>= {};

    // Act
    const result = getCounter(state as StateScheme);

    // Assert
    expect(result).toBeUndefined();
  });
});
