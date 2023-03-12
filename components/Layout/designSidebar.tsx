import { ReactNode, useState } from "react";
import SvgIcon from "./svg";
import { svgIconType } from "../../interfaces";
import DesignSidebarSwitching from "./designSidebarSwitching";

export interface ISidebarLinks {
    children?: ReactNode,
    onSideBarLinkClick: () => void,
    label: string,
    svgIcon: svgIconType
}

/**
 * Link component for Design Navigation
 */
export function SidebarLinks({onSideBarLinkClick, label, svgIcon}: ISidebarLinks) {
    return <a href="#" onClick={onSideBarLinkClick} className="flex flex-col items-center p-2 text-gray-900 hover:bg-gray-100">
        <SvgIcon iconName={svgIcon} />
        <span className="text-sm">{label}</span>
    </a>
}

export default function DesignSidebar({className}: {className: string}) {
    const [selectedOption, setSelectedOption] = useState<svgIconType>('svg_audio');
    return <aside id="logo-sidebar" className={`${className} h-screen bg-white`} aria-label="Sidebar">
        <div className={`flex`}>
            <div className="basis-1/3 h-screen  overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2">
                    <li className={selectedOption == 'svg_audio' ? "bg-gray-100" : ""}>
                        <SidebarLinks 
                            label="Audio"
                            svgIcon="svg_audio"
                            onSideBarLinkClick={() => setSelectedOption('svg_audio')}
                        />
                    </li>
                    <li className={selectedOption == 'svg_template' ? "bg-gray-100" : ""}>
                        <SidebarLinks 
                            label="Template"
                            svgIcon="svg_template"
                            onSideBarLinkClick={() => setSelectedOption('svg_template')}
                        />
                    </li>
                    <li className={selectedOption == 'svg_soundwave' ? "bg-gray-100" : ""}>
                        <SidebarLinks 
                            label="Sound Wave"
                            svgIcon="svg_soundwave"
                            onSideBarLinkClick={() => setSelectedOption('svg_soundwave')}
                        />
                    </li>
                    <li className={selectedOption == 'svg_canvassize' ? "bg-gray-100" : ""}>
                        <SidebarLinks 
                            label="Canvas Size"
                            svgIcon="svg_canvassize"
                            onSideBarLinkClick={() => setSelectedOption('svg_canvassize')}
                        />
                    </li>
                    <li className={selectedOption == 'svg_background' ? "bg-gray-100" : ""}>
                        <SidebarLinks 
                            label="Background"
                            svgIcon="svg_background"
                            onSideBarLinkClick={() => setSelectedOption('svg_background')}
                        />
                    </li>
                    <li className={selectedOption == 'svg_texticon' ? "bg-gray-100" : ""}>
                        <SidebarLinks 
                            label="Text"
                            svgIcon="svg_texticon"
                            onSideBarLinkClick={() => setSelectedOption('svg_texticon')}
                        />
                    </li>
                    <li className={selectedOption == 'svg_qrcode' ? "bg-gray-100" : ""}>
                        <SidebarLinks 
                            label="QR Code"
                            svgIcon="svg_qrcode" 
                            onSideBarLinkClick={() => setSelectedOption('svg_qrcode')}
                        />
                    </li>
                    <li className={selectedOption == 'svg_download' ? "bg-gray-100" : ""}>
                        <SidebarLinks
                            label="Download"
                            svgIcon="svg_download" 
                            onSideBarLinkClick={() => setSelectedOption('svg_download')}
                        />
                    </li>
                </ul>
            </div>
            <div className="basis-2/3 h-screen bg-gray-100 border-r border-gray-200">
                <div className="p-3 overflow-y-auto">
                    <DesignSidebarSwitching iconName={selectedOption} />
                </div>
            </div>
        </div>        
    </aside>
}