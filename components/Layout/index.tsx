import React, { ReactNode } from "react";
import layoutCss from "../../styles/layout.module.scss";

interface LayoutPropsType {
    children?: ReactNode
}

function Layout({children}: LayoutPropsType) {
    return <div className={`${layoutCss.container} mx-auto`}>
        {children}
    </div>
}

export default Layout;