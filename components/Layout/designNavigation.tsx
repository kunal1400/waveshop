import { LayoutPropsType } from "../../interfaces";
import Link from "next/link";

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
    return <div className="w-full p-2 bg-gradient-to-r from-purple-500 via-blue-500 to-green-600">
        <div className="inline-flex justify-start w-full sm:w-1/2">
            <Link href="/" className="p-2 text-slate-50 hover:text-slate-300">&lt; Back</Link>
            <NavButton>File</NavButton>
            <NavButton>Resize</NavButton>
            {/* Undo Button by default will be disabled */}
            <NavButton>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m6.05 7.25 2.22-2.22A.75.75 0 0 0 7.2 3.97L4.43 6.75c-.69.68-.69 1.8 0 2.48l2.83 2.83A.75.75 0 0 0 8.32 11L6.07 8.75H16a4.25 4.25 0 1 1 0 8.5h-4a.75.75 0 1 0 0 1.5h4a5.75 5.75 0 0 0 0-11.5H6.05z"></path></svg>
            </NavButton>            
            {/* Redo Button by default will be disabled */}
            <NavButton>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m18.054 7.252-2.296-2.296a.75.75 0 0 1 1.06-1.06l2.83 2.828a1.75 1.75 0 0 1 0 2.475l-2.832 2.831a.75.75 0 0 1-1.06-1.06l2.219-2.22H8a4.25 4.25 0 0 0 0 8.5h4a.75.75 0 0 1 0 1.5H8a5.75 5.75 0 0 1 0-11.5h10c.018 0 .036 0 .054.002Z"></path></svg>
            </NavButton>
        </div>
        <div className="inline-flex justify-end w-full sm:w-1/2">
            <NavButton>
                <svg className="inline" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24"><defs><path id="icon-print-poster-a" d="M7,2 L17,2 C18.1045695,2 19,2.8954305 19,4 L19,20 C19,21.1045695 18.1045695,22 17,22 L7,22 C5.8954305,22 5,21.1045695 5,20 L5,4 C5,2.8954305 5.8954305,2 7,2 Z M7,3.5 C6.72385763,3.5 6.5,3.72385763 6.5,4 L6.5,20 C6.5,20.2761424 6.72385763,20.5 7,20.5 L17,20.5 C17.2761424,20.5 17.5,20.2761424 17.5,20 L17.5,4 C17.5,3.72385763 17.2761424,3.5 17,3.5 L7,3.5 Z M19,14.0234274 L19,20 C19,21.1045695 18.1045695,22 17,22 L7,22 C5.8954305,22 5,21.1045695 5,20 L5,16.0852095 L6.88514567,13.7289723 C6.97441202,13.6173986 7.07537821,13.5157124 7.18631483,13.4256555 C8.04388596,12.7294906 9.30343786,12.8603363 9.99960274,13.7179074 L10.4630635,14.2888219 L13.2572695,10.7973391 C13.346436,10.6859217 13.4472711,10.5843675 13.5580521,10.4944115 C14.4155271,9.79812819 15.675097,9.92879981 16.3713804,10.7862748 L19,14.0234274 Z M17.5,14.5557421 L15.2069336,11.7318241 C15.0328627,11.5174554 14.7179702,11.4847875 14.5036015,11.6588583 C14.4759062,11.6813473 14.4506975,11.7067359 14.4284058,11.7345902 L11.4305185,15.4805818 L15.5052157,20.5 L17,20.5 C17.2761424,20.5 17.5,20.2761424 17.5,20 L17.5,14.5557421 Z M13.5731845,20.5 L8.83502533,14.6632959 C8.66098411,14.4489031 8.34609614,14.4161917 8.13170336,14.5902329 C8.1039692,14.6127472 8.07872765,14.6381687 8.05641106,14.6660621 L6.5,16.611415 L6.5,20 C6.5,20.2761424 6.72385763,20.5 7,20.5 L13.5731845,20.5 Z M9.5,9 C10.3284271,9 11,8.32842712 11,7.5 C11,6.67157288 10.3284271,6 9.5,6 C8.67157288,6 8,6.67157288 8,7.5 C8,8.32842712 8.67157288,9 9.5,9 Z"></path></defs><g fill="none" fillRule="evenodd"><use fill="currentColor" fillRule="nonzero" xlinkHref="#icon-print-poster-a"></use></g></svg>
                <span> Print Poster</span>
            </NavButton>
            <NavButton>
                <svg width="24" className="inline" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 11.75V19a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-7.25a.75.75 0 1 1 1.5 0V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7.25a.75.75 0 1 1 1.5 0Zm8.323-6.19v9.69a.75.75 0 0 1-1.5 0l-.001-9.69-3.037 3.215a.751.751 0 0 1-1.062-1.06l4.318-4.495a.751.751 0 0 1 1.062 0l4.18 4.495a.749.749 0 1 1-1.06 1.06l-2.9-3.216Z" fill="currentColor" fillRule="nonzero"></path></svg>
                <span> Share</span>
            </NavButton>
        </div>
    </div>
}