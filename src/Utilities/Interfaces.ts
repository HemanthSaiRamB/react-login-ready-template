import { ChangeEvent, ReactNode } from "react"

export interface IRoute {
    path: string
    element: JSX.Element
    hasChildren: boolean
    children: Partial<IRoute>[]
    index: boolean
}

export interface IInputElementProps {
    children: (input: string, inputChange: (e: ChangeEvent<HTMLInputElement>) => void) => JSX.Element
}

export interface IButtonElementProps {
    children?: ReactNode
    onClick?: () => void
    type: 'submit' | 'reset' | 'button'
    label?: string
    className?: string
}

export interface IProductListMock {
    prodId: number
    prodName: string
    prodImage: string
    prodPrice: number
}

export interface ILoginInfo {
    token: string | null,
    loading: boolean,
    error: string | null
}