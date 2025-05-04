import { createReducer, on } from "@ngrx/store"
import { CounterState } from "./counter.sate";
import *as CounterActions from './counter.action'
// import { decrement, increment, reset } from "./counter.action";
import { state } from "@angular/animations";


export const initialState: CounterState = {
    counters: [0]
}

const _counterReducer = createReducer(initialState,
    on(CounterActions.increment, (state, { index }) => ({
        ...state,
        counters: state.counters.map((val, i) => {
            let output = i === index ? val + 1 : val;
            return output;
        })      
    })

    ),
    on(CounterActions.decrement, (state, { index }) => ({
        ...state,
        counters: state.counters.map((val, i) => {
            let outputDec = i === index ? val - 1 : val
            return outputDec;
        }),
    })

    ),

    // on(reset,(state) => {
    //     return {...state,counter:0}
    // } ),
);


export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action)
}