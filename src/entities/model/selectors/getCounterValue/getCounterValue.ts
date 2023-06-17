
import { getCounter } from "../getCounter/getCounter"
import { createSelector } from "@reduxjs/toolkit"
import { CounterScheme } from "entities/model/types/CounterSchema"

export const getCounterValue = createSelector(getCounter,(counter:CounterScheme ) => counter.value )