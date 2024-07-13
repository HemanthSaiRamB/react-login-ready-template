import React, { useEffect } from 'react'
import { useNavigate, useLocation, useOutletContext, useParams } from 'react-router-dom'
import ButtonElement from '../../../Components/ButtonElement/ButtonElement'
import { IProductListMock } from '../../../Utilities/Interfaces'
import './ProductDescp.css'
function ProductDescp() {
    const context = useOutletContext()
    const { prodId } = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const goBackOne = () => {
        navigate('../')
    }
    const goBackTwo = () => {
        navigate('../../')
    }
    const goBackHistory = () => {
        navigate(-1)
    }
    // useEffect(() => {
    //     if (location) {
    //         // console.log(location.state)
    //     }
    // }, [location])
    // useEffect(()=>{
    //     console.log('ppp',context)
    // },[context])
    // useEffect(() => {
    //     console.log('ppp', prodId)
    // }, [prodId])
    if (location.state) {
        const { prodId, prodName, prodImage, prodPrice } = location.state.prodDtls as IProductListMock
        return (<>
            <p>{'ProductDescp Component'}</p>
            <div className='prodGrid'>
                <div className='prodDescp'>
                    <img src={prodImage} className='prodImage' />
                    <div className='prodDtls'>
                        <p className='prodName'>{prodName}</p>
                        <p className='prodPrice'>{prodPrice}</p>
                    </div>
                </div>
            </div>
            <ButtonElement onClick={goBackOne} type='button' label='One Step Back' />
            <ButtonElement onClick={goBackTwo} type='button' label='Two Steps Backs' />
            <ButtonElement onClick={goBackHistory} type='button' label='Using history' />
        </>)
    } else {
        return <>No Data Available</>
    }

}
export default ProductDescp