import { createContext, useReducer } from "react";
import { intialState, reducer } from "../reducer/reducer";

export const Context = createContext()

export const Store = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, intialState)
    return (
        <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
    )
}