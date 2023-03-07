import React, { useReducer } from "react";
import { LayoutPropsType } from "@/interfaces";
import { CanvasContext } from "@/context/canvasContext";
import { canvasData } from "@/reducer/canvasData";
import { setCanvasData } from "@/reducer/canvasReducer";

function Layout({children}: LayoutPropsType) {
    const [state, dispatch] = useReducer(setCanvasData, canvasData);
    return <CanvasContext.Provider value={{state, dispatch}}>
            {children}
    </CanvasContext.Provider> 
}

export default Layout;

// Exporting other default components from index
export {default as Container} from "./container";
export {default as DesignNavigation} from "./designNavigation";