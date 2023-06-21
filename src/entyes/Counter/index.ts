import type { CounterScheme } from "./model/types/CounterSchema";
import {counterActions } from "./model/slice/CounterSlice";
import { Counter } from "./ui/Counter";

export{
    CounterScheme,
    counterActions,
    Counter   
}