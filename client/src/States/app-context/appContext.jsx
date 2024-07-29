import { createContext } from "react";
import { INITIALS } from "../initial-states/initial";
const { INITIAL_STATE, USER_STATE } = INITIALS

export const ToggleFlips = createContext({
    state : INITIAL_STATE,
    dispatch : () => {},
})

export const UserState =  createContext({
    state : USER_STATE,
    dispatch  : () => {},
})
