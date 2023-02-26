import { createContext } from "react";
import { canvasData, InitialStateInterface } from "@/reducer/canvasData";
import { ActionInterface } from "@/reducer/canvasReducer";

export const CanvasContext = createContext<{
    state: InitialStateInterface, 
    dispatch: React.Dispatch<ActionInterface>}
    >({ state: canvasData, dispatch: () => {} })