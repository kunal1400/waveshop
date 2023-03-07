import { LayoutPropsType } from "../../interfaces";
import Link from "next/link";
import SvgIcon from "./svg";

/**
 * Button component for Design Navigation
 */
export function NavButton({children}: LayoutPropsType) {
    return <button className="p-2 text-slate-50 hover:text-slate-300">
        {children}
    </button>
}

/**
 * Design Navigation UI
 */
export default function DesignNavigation() {
    return <div className="fixed top-0 z-50 w-full p-2 bg-gradient-to-r from-purple-500 via-blue-500 to-green-600">
        <div className="inline-flex justify-start w-full sm:w-1/2">
            <Link href="/" className="p-2 text-slate-50 hover:text-slate-300">&lt; Back</Link>
            <NavButton>File</NavButton>
            <NavButton>Resize</NavButton>
            <NavButton><SvgIcon iconName="svg_undo" /></NavButton>
            <NavButton><SvgIcon iconName="svg_redo" /></NavButton>
        </div>
        <div className="inline-flex justify-end w-full sm:w-1/2">
            <NavButton><SvgIcon iconName="svg_print" /><span> Print Poster</span></NavButton>
            <NavButton><SvgIcon iconName="svg_share" /><span> Share</span></NavButton>
        </div>
    </div>
}