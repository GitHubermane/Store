import { useState } from "react"
import { NavLink } from "react-router-dom"
import { SERVER_URL } from "../env"
import { useTypedDispatch, useTypedSelector } from "../hooks/TypedReduxHooks"
import { IProductData } from "../models/IProductsData"
import { addToCart, getCart } from "../Redux/ActionCreator/Cart.AC"
import "../styles/Card.scss"
import { AddToFavBtn } from "./AddToFavBtn"
import { QuantityPanel } from "./QuantityPanel"

export const Card = (props: { product: IProductData }) => {
    const { id, img, name, price } = props.product
    const { devices } = useTypedSelector(state => state.Cart)
    const dispatch = useTypedDispatch()

    const onAddToCartClick = async (id: number) => {
        await dispatch(addToCart(id))
        dispatch(getCart())
    }

    const [fav, setFav] = useState(false)
    const onAddToFavClick = () => {
        setFav(!fav)
    }

    return (
        <div className='Card'>
            <div className='Card__imgBlock'>
                <NavLink to={`/product/${id}`}>
                    <img
                        className='Card__img'
                        src={`${SERVER_URL}/${img}`}
                    />
                </NavLink>
            </div>

            <div className='Card__infoBlock'>
                <div className='Card__nameBlock'>
                    {name}
                    {/* <button onClick={onAddToFavClick}>
                        <span className={`material-symbols-outlined ${fav ? 'fillBtn' : ''}`}>
                            favorite
                        </span>
                    </button> */}
                    <AddToFavBtn id={id}/>
                </div>

                <div className='Card__price'>
                    {price} &#x20bd;
                </div>
            </div>
            <div className='Card__addBtnBlock'>
                {
                    devices.some(i => i.deviceId === id) ?

                        <QuantityPanel
                            id={String(id)}
                        /> :

                        <button
                            className='Card__addBtn'
                            onClick={() => { onAddToCartClick(id) }}
                        >
                            Добавить в корзину
                        </button>
                }
            </div>
        </div >

    )
}