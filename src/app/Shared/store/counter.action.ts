import { createAction, props } from "@ngrx/store";

export const increment = createAction("[Counter]increment",props<{index:number}>());
export const decrement = createAction("[Counter]decrement",props<{index:number}>())
export const reset = createAction("reset")