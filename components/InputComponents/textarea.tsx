import { AllowedActions } from "@/reducer/canvasReducer";
import React, { useContext } from "react";
import { CanvasContext } from "../../context/canvasContext";

function Textarea() {
    const {state, dispatch} = useContext(CanvasContext);
    const {text} = state;

    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch({
            type: AllowedActions.UPDATE_TEXT, 
            payload: {
                text: e.target.value
            }
        });
    }

    return <textarea
        id="about"
        name="about"
        rows={3}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder="you@example.com"
        defaultValue={text}
        onChange={handleTextareaChange}
    />
}

export default Textarea;