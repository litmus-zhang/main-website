import React from "react"
export interface ButtonProps
{
    text: string
    variant?: "primary"| "secondary"
    type?: "button" | "submit" | "reset"
    size?: "small" | "medium" | "large"
}

function Button(props: ButtonProps) {
    const { text, variant, type, size } = props
    const textSize = size === "small" ? "text-sm" : size === "medium" ? "text-base" : "text-lg"
    const btnStyle = variant === "primary" ? `bg-blue-400 p-2 text-white ${textSize} hover:shadow-md` : `border border-blue-400 p-2 text-blue-400 ${textSize} `
   
    return (
        <button className={btnStyle} type={type}>
            {text}
        </button>
    )
}

export default Button
