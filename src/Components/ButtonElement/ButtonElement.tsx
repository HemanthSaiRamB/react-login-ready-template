import React from "react"
import { IButtonElementProps } from "../../../Utilities/Interfaces"

const ButtonElement: React.FC<IButtonElementProps> = ({ children, onClick, type = 'button', label, className }) => {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}>
            {label}
            {
                children &&
                <>
                    {children}
                </>
            }
        </button>
    )
}

export default ButtonElement