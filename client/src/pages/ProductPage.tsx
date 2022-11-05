import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AddToFavBtn } from "../components/AddToFavBtn"
import { Loader } from "../components/Loader"
import { useTypedDispatch, useTypedSelector } from "../hooks/TypedReduxHooks"
import { addToCart } from "../Redux/ActionCreator/Cart.AC"
import { fetchProduct } from "../Redux/ActionCreator/Product.AC"
import '../styles/pages/ProductPage.scss'

export const ProductPage = () => {
    const { product, isLoading } = useTypedSelector(state => state.Product)
    const dispatch = useTypedDispatch()
    const { id } = useParams()

    const onClickHandler = (id: number) => {
        dispatch(addToCart(id))
    }

    useEffect(() => {
        dispatch(fetchProduct(Number(id)))
    }, [])

    return (
        <>
            {
                isLoading ?
                    <Loader /> :

                    <div className='ProductPage'>
                        <div className='ProductPage__titleBlock'>
                            <div className='ProductPage__title'>
                                {product.name}
                            </div>
                            <AddToFavBtn
                                className='ProductPage__favBtn'
                                id={Number(id)}
                            />
                        </div>
                        <div className='ProductPage__block'>
                            {
                                product.img &&
                                <img
                                    className='ProductPage__img'
                                    src={`${process.env.REACT_APP_SERVER_URL}/${product.img}`}
                                />
                            }
                            <div className='ProductPage__infoBlock'>
                                <div className='ProductPage__price'>
                                    {product.price} &#x20bd;
                                </div>
                                <button
                                    className='ProductPage__addBtn'
                                    onClick={() => { onClickHandler(Number(id)) }}
                                >
                                    Добавить в корзину
                                </button>
                            </div>

                        </div>
                    </div>
            }
        </>
    )

}