import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import './ProductSearch.css'
import InputElement from '../../../Components/InputElement/InputElement'
import ButtonElement from '../../../Components/ButtonElement/ButtonElement'
import { ProductListMock } from '../../../mockData/ProductListMock'
function ProductSearch() {
    const [state, setState] = useState<string[]>(['1', '2', 'Hello'])
    const navigate = useNavigate()
    const goBackOne = () => {
        navigate('../')
    }

    return <>
        <p>{'ProductSearch Component'}</p>
        <div className='srchContainer'>
            <label>Search Product</label>
            <InputElement>
                {(value, inputChange) => {
                    return (
                        <input value={value} onChange={inputChange} />
                    )
                }}
            </InputElement>
        </div>
        <Outlet context={ProductListMock} />
        <ButtonElement onClick={goBackOne} label='OneBack' type='button' />
        <ButtonElement onClick={() => setState((prevState) => [...prevState, Math.random().toString()])} label='Change State' type='button' />
    </>
}
export default ProductSearch