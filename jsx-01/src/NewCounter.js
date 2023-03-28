import React, { useState } from "react";
function useCounter(initialValue = 0) {
    const [counter, setCounter] = useState(initialValue)
    const [valuechange, setValuechange] = useState(1)
    function HandleIncrement() {
        setCounter((counter) => counter + valuechange)
    }
    function HandleDecrement() {
        setCounter((counter) => counter - valuechange)
    }
    function ResetCounter() {
        setCounter(initialValue)
        setValuechange(1)
    }
    function AddValue() {
        setValuechange((valuechange) => valuechange + 1)
    }
    function RemoveValue() {
        setValuechange((valuechange) => valuechange - 1)
    }
    return {
            counter: counter,
            valuechange: valuechange,
            onIncrement: HandleIncrement,
            onDecrement: HandleDecrement,
            onAddValue: AddValue,
            onRemoveValue: RemoveValue,
            onReset: ResetCounter
    }
}
export function Counter({ initialValue = 0}) {
    const {counter, valuechange,  onIncrement, onDecrement, onAddValue, onRemoveValue, onReset} = useCounter(initialValue)
    return (
        <div>
            <h1>Count is {counter}</h1>
            <button name="increment" onClick={onIncrement}>add</button>
            <button name="decrement" onClick={onDecrement}>remove</button>
            <button name="add value" onClick={onAddValue}>Add value</button>
            <button name="remove value" onClick={onRemoveValue}>Remove Value</button>
            <button name="reset" onClick={onReset}>reset</button>
            <h2>Value Status: {valuechange}</h2>
        </div>
    )
}