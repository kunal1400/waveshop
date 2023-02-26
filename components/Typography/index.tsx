import React from "react";
import { TextInputPropsInterface } from "../../interfaces";

export function PageHeading({text}: TextInputPropsInterface) {
    return <h2 className="text-2xl my-6 font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        {text}
    </h2>
}