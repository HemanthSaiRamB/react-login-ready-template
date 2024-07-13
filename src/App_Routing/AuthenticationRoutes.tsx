import React from 'react'
import Login from "../Screens/AuthenticationScreens/LoginScreen/Login";
import { IRoute } from "../Utilities/Interfaces";
import Register from '../Screens/AuthenticationScreens/RegistrationScreen/Register';

export const Auth_Routes: Partial<IRoute>[] = [
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
]
