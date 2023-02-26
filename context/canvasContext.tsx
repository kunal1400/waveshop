import { createContext } from "react";
import { canvasData, InitialStateInterface } from "@/reducer/canvasData";
import { CanvasActionInterface } from "@/reducer/canvasReducer";

export const CanvasContext = createContext<{
    state: InitialStateInterface, 
    dispatch: React.Dispatch<CanvasActionInterface>}
    >({ state: canvasData, dispatch: () => {} })