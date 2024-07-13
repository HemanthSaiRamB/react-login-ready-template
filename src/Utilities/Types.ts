import { ReactNode } from "react"
import { IRoute } from "./Interfaces"

export type TLoginFlag = boolean

export type TLoginSessionProviderProps = { children: ReactNode }

export type TRouteElement = { route: IRoute, isTopLevel: boolean }

export type TLogingCredentials = { username: string, password: string }