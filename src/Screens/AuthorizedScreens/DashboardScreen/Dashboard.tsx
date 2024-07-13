import React from "react"
import { useNavigate } from "react-router-dom"
import ButtonElement from "../../../Components/ButtonElement/ButtonElement"
const Dashboard = () => {
    const navigate = useNavigate()
    const navToProducts = () => {
        navigate('products')
    }
    return (
        <>
            <p>{'Dashboard Screen'}</p>
            <ButtonElement onClick={navToProducts} label="GoTo Products" type="button" />
        </>
    )
}
export default Dashboard