import { svgIconType } from "../../interfaces";

export interface InputComponentInterface {
    type: 'text' | 'password',
    label: string,
    name: string,
    placeholder: string,
    svgIcon?: svgIconType
}

const Input: React.FC<InputComponentInterface> = ( {type, label, name, svgIcon, placeholder}: InputComponentInterface ) => {
    return <div>
        {label ? <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">{label}</label> : ''}
        <div className="relative mt-2 rounded-md shadow-sm">
            {svgIcon ? <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">$</span>
            </div> : ''}
            <input type={type} 
                name={name} 
                className={`block w-full rounded-md border-0 py-1.5 ${svgIcon ? 'pl-7' : 'pl-1.5' } pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`} 
                placeholder={placeholder}
            />      
        </div>
    </div>
}

export default Input;