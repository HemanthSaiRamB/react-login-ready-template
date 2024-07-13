import { ChangeEvent, useState } from "react";
import { IInputElementProps } from "../../Utilities/Interfaces";

// render props
const InputElement: React.FC<IInputElementProps> = ({ children }) => { // function as prop

    const [input, setInput] = useState('')

    const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    return children(input, inputChange)
}

export default InputElement