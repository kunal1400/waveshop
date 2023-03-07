import React from "react";
import { LayoutPropsType } from "@/interfaces";
import layoutCss from "../../styles/layout.module.scss";

function Container({children}: LayoutPropsType) {
    return <div className={`${layoutCss.container} mx-auto`}>
        {children}
    </div>
}

export default Container;