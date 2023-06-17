import { CounterScheme } from "./model/types/CounterSchema";
import { counterReducer,counterActions } from "./model/slice/CounterSlice";
import { Counter } from "./Counter/ui/Counter";
import { getCounterValue } from "./model/selectors/getCounterValue/getCounterValue";

export{
    CounterScheme,
    counterReducer,
    Counter,
    counterActions,
    getCounterValue
    
}