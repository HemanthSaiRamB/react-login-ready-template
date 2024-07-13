import React, { useEffect } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import ButtonElement from '../../../Components/ButtonElement/ButtonElement'
import { IProductListMock } from '../../../Utilities/Interfaces'
import './ProductList.css'
function ProductList() {
    const context: IProductListMock[] = useOutletContext()
    const navigate = useNavigate()
    const navigateToProdList = (prodId: number) => {
        console.log('ppp', prodId)
        navigate(`proddescp/${prodId}`,
            {
                state:
                {
                    prodDtls: context.find((product: IProductListMock, productId: number) => {
                        return product.prodId === prodId
                    })
                }
            })
    }

    // useEffect(() => { console.log(context) }, [context])
    return (
        <>
            <p>{'ProductList Component'}</p>
            <div className='prodGrid'>
                <div className='prodListContainer'>
                    {
                        context.map((product: IProductListMock) => {
                            return (
                                <div key={product.prodId} className='productGrid'>
                                    <img src={product.prodImage} alt={product.prodName} className='prodImage' />
                                    <div className='prodDtls'>
                                        <p className='prodName'>{product.prodName}</p>
                                        <p className='prodImage'>{product.prodPrice}</p>
                                    </div>
                                    <ButtonElement onClick={() => navigateToProdList(product.prodId)} label='more..' type='button' />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>)
}
export default ProductList