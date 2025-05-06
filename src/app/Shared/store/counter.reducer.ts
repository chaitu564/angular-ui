import { createReducer, on } from "@ngrx/store"
import { CounterState } from "./counter.sate";
import *as CounterActions from './counter.action'
// import { decrement, increment, reset } from "./counter.action";
import { state } from "@angular/animations";
import { Action } from "rxjs/internal/scheduler/Action";


export const initialState: CounterState = {
    counters: [0]
}

const _counterReducer = createReducer(initialState,
    on(CounterActions.increment, (state, { index }) => ({
        ...state,
        counters: state.counters.map((val, i) =>  val + 1

     


    )      
    })

    ),
    on(CounterActions.decrement, (state, { index }) => ({
        ...state,
        counters: state.counters.map((val, i) =>  val - 1
        
            
     
    ),
    })

    ),

  
);


export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action)
}