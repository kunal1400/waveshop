import React, { createContext, useReducer } from "react";
import { LayoutPropsType } from "@/interfaces";
import layoutCss from "../../styles/layout.module.scss";
import { CanvasContext } from "@/context/canvasContext";
import { canvasData } from "@/reducer/canvasData";
import { setCanvasData } from "@/reducer/canvasReducer";

function Layout({children}: LayoutPropsType) {
    const [state, dispatch] = useReducer(setCanvasData, canvasData);
    return <CanvasContext.Provider value={{state, dispatch}}>
        <div className={`${layoutCss.container} mx-auto`}>
            {children}
        </div>
    </CanvasContext.Provider> 
}

export default Layout;