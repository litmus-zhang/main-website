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
    const btnStyle = variant === "primary" ? `rounded-lg bg-primary p-2 text-black ${textSize} hover:shadow-xl hover:brightness-200` : `border border-primary p-2 rounded-lg text-white-1 ${textSize} hover:bg-primary hover:text-black hover:shadow-xl`
   
    return (
        <button className={btnStyle} type={type}>
            {text}
        </button>
    )
}

export default Button
