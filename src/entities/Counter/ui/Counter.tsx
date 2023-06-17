import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shared/ui/Button/Button'
import { getCounterValue ,counterActions } from 'entities';



export const Counter = () => {

    const counterValue = useSelector(getCounterValue)

    const dispatch = useDispatch();
    const dec = () =>{
        dispatch(counterActions.decrement())

    }
    const inc = () =>{
        dispatch(counterActions.increment())
    }

    return (    
        <div >
            <h1 data-testid = "value-title">Value : {counterValue}</h1>
            <Button data-testid = "button-inc" onClick={inc}>increment</Button>
            <Button data-testid = "button-dec"onClick={dec}>decrement</Button>
        </div>
    )   
}
