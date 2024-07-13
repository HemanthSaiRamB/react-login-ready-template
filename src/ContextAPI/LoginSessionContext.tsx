import React, { useState, createContext, useContext } from "react";
import { TLoginFlag, TLoginSessionProviderProps } from "../Utilities/Types";

const LogginSessionContext = createContext(null)
export const LoginSessionProvider: React.FC<TLoginSessionProviderProps> =
    ({ children }) => {
        const [loggedIn, setLoggedIn] = useState<TLoginFlag>(false)

        const isAlreadyLoggedIn = () => {
            if (sessionStorage.getItem('loggedIn') !== null)
                return true
            return false
        }
        const loginSessionBackUp = () => {
            if (sessionStorage.getItem('loggedIn') === null) {
                sessionStorage.setItem('loggedIn', 'true')
            }
        }

        const loginSessionClear = () => {
            sessionStorage.removeItem('loggedIn')
        }

        const login = () => {
            loginSessionBackUp()
            setLoggedIn(true)
        }

        const logout = () => {
            loginSessionClear()
            setLoggedIn(false)
        }

        return (
            <LogginSessionContext.Provider
                value={{ loggedIn, login, logout, isAlreadyLoggedIn }}>
                <>{children}</>
            </LogginSessionContext.Provider>
        )
    }

export const useLoginSession = () => useContext(LogginSessionContext)