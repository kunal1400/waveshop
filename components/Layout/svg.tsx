export interface ISvgIcon {
    iconName: svgIconType
}

export type svgIconType = 'svg_share' | 'svg_print' | 'svg_undo' | 'svg_redo' | 'svg_user' | 'svg_product' | 'svg_signin' | 'svg_audio' | 'svg_template' | 'svg_soundwave' | 'svg_canvassize' | 'svg_background' | 'svg_texticon' | 'svg_qrcode' | 'svg_download';

export default function SvgIcon({iconName}: ISvgIcon) {
    switch (iconName) {
        case 'svg_share':
            return <svg width="24" className="inline" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 11.75V19a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-7.25a.75.75 0 1 1 1.5 0V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7.25a.75.75 0 1 1 1.5 0Zm8.323-6.19v9.69a.75.75 0 0 1-1.5 0l-.001-9.69-3.037 3.215a.751.751 0 0 1-1.062-1.06l4.318-4.495a.751.751 0 0 1 1.062 0l4.18 4.495a.749.749 0 1 1-1.06 1.06l-2.9-3.216Z" fill="currentColor" fillRule="nonzero"></path></svg>
        break;

        case 'svg_print':
            return <svg className="inline" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24"><defs><path id="icon-svg_print-poster-a" d="M7,2 L17,2 C18.1045695,2 19,2.8954305 19,4 L19,20 C19,21.1045695 18.1045695,22 17,22 L7,22 C5.8954305,22 5,21.1045695 5,20 L5,4 C5,2.8954305 5.8954305,2 7,2 Z M7,3.5 C6.72385763,3.5 6.5,3.72385763 6.5,4 L6.5,20 C6.5,20.2761424 6.72385763,20.5 7,20.5 L17,20.5 C17.2761424,20.5 17.5,20.2761424 17.5,20 L17.5,4 C17.5,3.72385763 17.2761424,3.5 17,3.5 L7,3.5 Z M19,14.0234274 L19,20 C19,21.1045695 18.1045695,22 17,22 L7,22 C5.8954305,22 5,21.1045695 5,20 L5,16.0852095 L6.88514567,13.7289723 C6.97441202,13.6173986 7.07537821,13.5157124 7.18631483,13.4256555 C8.04388596,12.7294906 9.30343786,12.8603363 9.99960274,13.7179074 L10.4630635,14.2888219 L13.2572695,10.7973391 C13.346436,10.6859217 13.4472711,10.5843675 13.5580521,10.4944115 C14.4155271,9.79812819 15.675097,9.92879981 16.3713804,10.7862748 L19,14.0234274 Z M17.5,14.5557421 L15.2069336,11.7318241 C15.0328627,11.5174554 14.7179702,11.4847875 14.5036015,11.6588583 C14.4759062,11.6813473 14.4506975,11.7067359 14.4284058,11.7345902 L11.4305185,15.4805818 L15.5052157,20.5 L17,20.5 C17.2761424,20.5 17.5,20.2761424 17.5,20 L17.5,14.5557421 Z M13.5731845,20.5 L8.83502533,14.6632959 C8.66098411,14.4489031 8.34609614,14.4161917 8.13170336,14.5902329 C8.1039692,14.6127472 8.07872765,14.6381687 8.05641106,14.6660621 L6.5,16.611415 L6.5,20 C6.5,20.2761424 6.72385763,20.5 7,20.5 L13.5731845,20.5 Z M9.5,9 C10.3284271,9 11,8.32842712 11,7.5 C11,6.67157288 10.3284271,6 9.5,6 C8.67157288,6 8,6.67157288 8,7.5 C8,8.32842712 8.67157288,9 9.5,9 Z"></path></defs><g fill="none" fillRule="evenodd"><use fill="currentColor" fillRule="nonzero" xlinkHref="#icon-svg_print-poster-a"></use></g></svg>
        break;

        case 'svg_undo':
            return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m6.05 7.25 2.22-2.22A.75.75 0 0 0 7.2 3.97L4.43 6.75c-.69.68-.69 1.8 0 2.48l2.83 2.83A.75.75 0 0 0 8.32 11L6.07 8.75H16a4.25 4.25 0 1 1 0 8.5h-4a.75.75 0 1 0 0 1.5h4a5.75 5.75 0 0 0 0-11.5H6.05z"></path></svg>
        break;

        case 'svg_redo':
            return <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m18.054 7.252-2.296-2.296a.75.75 0 0 1 1.06-1.06l2.83 2.828a1.75 1.75 0 0 1 0 2.475l-2.832 2.831a.75.75 0 0 1-1.06-1.06l2.219-2.22H8a4.25 4.25 0 0 0 0 8.5h4a.75.75 0 0 1 0 1.5H8a5.75 5.75 0 0 1 0-11.5h10c.018 0 .036 0 .054.002Z"></path></svg>
        break;

        case 'svg_user':
            return <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
        break;

        case 'svg_product':
            return <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
        break;

        case 'svg_signin':
            return <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
        break;

        case 'svg_audio':
            return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" fontSize="22" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 3v9.28a4.39 4.39 0 00-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"></path></svg>
        break;

        case 'svg_template':
            return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" fontSize="28" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-696 72h136v656H184V184zm656 656H384V384h456v456zM384 320V184h456v136H384z"></path></svg>
        break;

        case 'svg_soundwave':
            return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" fontSize="30" className="-mt-0.5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M468.53 236.03H486v39.94h-17.47v-39.94zm-34.426 51.634h17.47v-63.328h-17.47v63.328zm-33.848 32.756h17.47V191.58h-17.47v128.84zm-32.177 25.276h17.47V167.483h-17.47v178.17zm-34.448-43.521h17.47v-92.35h-17.47v92.35zm-34.994 69.879h17.47v-236.06h-17.525v236.06zM264.2 405.9h17.47V106.1H264.2V405.9zm-33.848-46.284h17.47V152.383h-17.47v207.234zm-35.016-58.85h17.47v-87.35h-17.47v87.35zm-33.847-20.823h17.47V231.98h-17.47v48.042zm-33.848 25.66h17.47v-99.24h-17.47v99.272zm-33.302 48.04h17.47V152.678H94.34v201zm-33.847-30.702h17.47V187.333h-17.47v135.642zM26 287.664h17.47v-63.328H26v63.328z"></path></svg>
        break;

        case 'svg_canvassize':
            return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" version="1.1" fontSize="28" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M342 88H120c-17.7 0-32 14.3-32 32v224c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V168h174c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16zM920 664h-48c-8.8 0-16 7.2-16 16v176H682c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h222c17.7 0 32-14.3 32-32V680c0-8.8-7.2-16-16-16zM342 856H168V680c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16v224c0 17.7 14.3 32 32 32h222c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16zM904 88H682c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h174v176c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V120c0-17.7-14.3-32-32-32z"></path></svg>
        break;

        case 'svg_background':
            return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.03 21.03a.75.75 0 0 1-1.06-1.06l17-17a.75.75 0 0 1 1.06 1.06l-17 17zm4.5.5a.75.75 0 0 1-1.06-1.06l13-13a.75.75 0 0 1 1.06 1.06l-13 13zm5 0a.75.75 0 0 1-1.06-1.06l8-8a.75.75 0 0 1 1.06 1.06l-8 8zm5.5-.5a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 1.06l-2 2zm-15.5-4.5a.75.75 0 0 1-1.06-1.06l13-13a.75.75 0 0 1 1.06 1.06l-13 13zm0-5a.75.75 0 0 1-1.06-1.06l8-8a.75.75 0 0 1 1.06 1.06l-8 8zm.5-5.5a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 1.06l-2 2z" fill="currentColor"></path></svg>;
        break;

        case 'svg_texticon':
            return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" fontSize="28" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M920 416H616c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-56h60v320h-46c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h164c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-46V480h60v56c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V424c0-4.4-3.6-8-8-8zM656 296V168c0-4.4-3.6-8-8-8H104c-4.4 0-8 3.6-8 8v128c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-64h168v560h-92c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-92V232h168v64c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8z"></path></svg>
        break;
    
        case 'svg_qrcode':
            return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" fontSize="28" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M468 128H160c-17.7 0-32 14.3-32 32v308c0 4.4 3.6 8 8 8h332c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8zm-56 284H192V192h220v220zm-138-74h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm194 210H136c-4.4 0-8 3.6-8 8v308c0 17.7 14.3 32 32 32h308c4.4 0 8-3.6 8-8V556c0-4.4-3.6-8-8-8zm-56 284H192V612h220v220zm-138-74h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm590-630H556c-4.4 0-8 3.6-8 8v332c0 4.4 3.6 8 8 8h332c4.4 0 8-3.6 8-8V160c0-17.7-14.3-32-32-32zm-32 284H612V192h220v220zm-138-74h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm194 210h-48c-4.4 0-8 3.6-8 8v134h-78V556c0-4.4-3.6-8-8-8H556c-4.4 0-8 3.6-8 8v332c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h78v102c0 4.4 3.6 8 8 8h190c4.4 0 8-3.6 8-8V556c0-4.4-3.6-8-8-8zM746 832h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm142 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path></svg>;
        break;

        case 'svg_download':
            return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" fontSize="28" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"></path><path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"></path></svg>
        break;

        default:
            return <></>;
        break;
    }
}