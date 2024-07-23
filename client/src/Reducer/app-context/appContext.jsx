import { createContext } from "react";
import { INITIAL_STATE } from "../initial-states/initial";

const ProjectContext = {

    ToggleFlips : createContext({
        state : INITIAL_STATE,
        dispatch : () => {},
     })
}


export { ProjectContext as Context}