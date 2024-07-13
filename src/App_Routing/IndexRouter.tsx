import React, { useEffect, useLayoutEffect, useState, Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { Auth_Routes } from "./AuthenticationRoutes"
import { SecuredRoutes } from "./AuthorizedRoutes"
import { useLoginSession } from "../ContextAPI/LoginSessionContext"
import { IRoute } from "../Utilities/Interfaces"

const IndexRouter = () => {
    const { loggedIn, isAlreadyLoggedIn, login } = useLoginSession()
    const [curr_routes, setCurrRoute] = useState<Partial<IRoute>[]>([])

    const setRoutes = () => {
        setCurrRoute(
            () => loggedIn ? [...SecuredRoutes] : [...Auth_Routes])
    }


    useLayoutEffect(() => { // to avoid flickering - to avoid briefly showing login screen
        if (isAlreadyLoggedIn()) {
            login()
        }
    }, [])

    useEffect(() => {
        setRoutes()
    }, [loggedIn])
    return (
        <Suspense fallback={<div>{'...L O D I N G'}</div>}>
            {
                curr_routes.length &&
                <Routes>
                    {renderRoutes(curr_routes)}
                    <Route path="*" element={<Navigate to={'/'} replace />} />
                </Routes >
            }
        </Suspense>
    )
}

const renderRoutes = (routes: Partial<IRoute>[]) => {
    return routes.map((route: IRoute, routerIndex: number) => {
        if (route.index) {
            return (<Route
                key={routerIndex}
                index
                element={route.element} />)
        } else {
            return (<Route
                key={routerIndex}
                path={route.path}
                element={route.element}>
                {route.hasChildren && renderRoutes(route.children)}
            </Route>)
        }
    })
}

export default IndexRouter