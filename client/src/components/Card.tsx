import { useState } from "react"
import { NavLink } from "react-router-dom"
import { SERVER_URL } from "../env"
import { useTypedDispatch } from "../hooks/TypedReduxHooks"
import { IProductData } from "../models/IProductsData"
import { addToCart, getCart } from "../Redux/ActionCreator/Cart.AC"
import "../styles/Card.scss"

export const Card = (props: { product: IProductData }) => {
    const { id, img, name, price } = props.product

    const dispatch = useTypedDispatch()

    const onAddToCartClick = (id: number) => {
        dispatch(addToCart(id))
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
                    <button onClick={onAddToFavClick}>
                        <span className={`material-symbols-outlined ${fav? 'fillBtn': ''}`}>
                            favorite
                        </span>
                    </button>
                </div>

                <div className='Card__price'>
                    {price} &#x20bd;
                </div>
            </div>

            <button
                className='Card__addBtn'
                onClick={() => { onAddToCartClick(id) }}
            >
                Добавить в корзину
            </button>
        </div>

    )
}