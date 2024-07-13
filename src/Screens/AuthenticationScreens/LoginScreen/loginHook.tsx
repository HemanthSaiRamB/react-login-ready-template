import { ChangeEvent, useState } from "react"
import { useLoginSession } from "../../../ContextAPI/LoginSessionContext"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { AppDispatch, RootStore } from "../../../Store"
import { loginRequest } from "../../../Store/authSlice"

const useLogin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useLoginSession()
    const dispatch = useDispatch<AppDispatch>()
    const loading = useSelector((state: RootStore) => state.authReducer.loading)
    const error = useSelector((state: RootStore) => state.authReducer.error)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value)
            return;
        }
        setPassword(e.target.value)
    }

    const handleLogin = () => {
        login()
        dispatch(loginRequest({ username, password }))
    }

    return { username, password, handleChange, handleLogin }
}

export default useLogin