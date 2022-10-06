import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { SERVER_URL } from "../env"
import { useTypedDispatch, useTypedSelector } from "../hooks/TypedReduxHooks"
import { addToCart } from "../Redux/ActionCreator/Cart.AC"
import { fetchProducts } from "../Redux/ActionCreator/Products.AC"
import "../styles/pages/ProductsPage.scss"

export const ProductsPage = () => {

    const { products, isLoading, error } = useTypedSelector(state => state.Products)
    const dispatch = useTypedDispatch()

    const onClickHandler = (id: number) => {
        dispatch(addToCart(id))
    }

    const getProducts = async () => {
        await dispatch(fetchProducts())
    }

    useEffect(() => {
        getProducts()
    }, [])
    
    return (
        <div className='Products__wrapper'>
            {
                products.map(({ id, ...product }) => (
                    <div
                        key={id}
                        className='Card__wrapper'
                    >
                        <div className='Card__imgBlock'>
                            <NavLink to={`/product/${id}`}>
                                <img
                                    className='Card__img'
                                    src={`${SERVER_URL}/${product.img}`}
                                />
                            </NavLink>
                        </div>

                        <div className='Card__infoBlock'>
                            <NavLink to={`/product/${id}`}>
                                <div className='Card__name'>
                                    {product.name}
                                </div>
                            </NavLink>
                            <div className='Card__price'>
                                {product.price} &#x20bd;
                            </div>
                        </div>

                        <button
                            onClick={() => { onClickHandler(id) }}
                        >
                            Добавить в корзину
                        </button>
                    </div>
                ))
            }
        </div>
    )
}