import { NavLink } from "react-router-dom"
import { SERVER_URL } from "../env"
import { useTypedDispatch, useTypedSelector } from "../hooks/TypedReduxHooks"
import { IProductData } from "../models/IProductsData"
import { addToCart, getCart } from "../Redux/ActionCreator/Cart.AC"
import { AddToFavBtn } from "./AddToFavBtn"
import { QuantityPanel } from "./QuantityPanel"
import "../styles/ProductItem.scss"
import '../styles/RowItem.scss'

type ItemPropsType = {
    product: IProductData,
    view: 'Cards' | 'Rows',
}

export const ProductItem = (props: ItemPropsType) => {

    return (
        <>
            {
                props.view === 'Cards' ?
                    <CardItems
                        product={props.product}
                    /> :
                    <RowItems
                        product={props.product}
                    />
            }
        </>
    )
}

type CardPropsType = {
    product: IProductData,
}

const CardItems = (props: CardPropsType) => {
    const { id, img, name, price } = props.product
    const { devices } = useTypedSelector(state => state.Cart)
    const dispatch = useTypedDispatch()

    const onAddToCartClick = async (id: number) => {
        await dispatch(addToCart(id))
        dispatch(getCart())
    }

    return (
        <div className='ProductItem'>
            <div className='ProductItem__imgBlock'>
                <NavLink to={`/product/${id}`}>
                    <img
                        className='ProductItem__img'
                        src={`${SERVER_URL}/${img}`}
                    />
                </NavLink>
            </div>

            <div className='ProductItem__infoBlock'>
                <div className='ProductItem__nameBlock'>
                    <NavLink to={`/product/${id}`}>
                        {name}
                    </NavLink>
                    <AddToFavBtn id={id} />
                </div>

                <div className='ProductItem__price'>
                    {price} &#x20bd;
                </div>
            </div>

            <div className='ProductItem__addBtnBlock'>
                {
                    devices.some(i => i.deviceId === id) ?

                        <QuantityPanel
                            id={String(id)}
                        /> :

                        <button
                            className='ProductItem__addBtn'
                            onClick={() => { onAddToCartClick(id) }}
                        >
                            Добавить в корзину
                        </button>
                }
            </div>
        </div>
    )
}


type RowPropsType = {
    product: IProductData,
}

const RowItems = (props: RowPropsType) => {
    const { id, img, name, price } = props.product
    const { devices } = useTypedSelector(state => state.Cart)
    const dispatch = useTypedDispatch()

    const onAddToCartClick = async (id: number) => {
        await dispatch(addToCart(id))
        dispatch(getCart())
    }

    return (
        <div className='RowItem'>
            <div className='RowItem__content'>
                <div className='RowItem__imgBlock'>
                    <NavLink to={`/product/${id}`}>
                        <img
                            className='RowItem__img'
                            src={`${SERVER_URL}/${img}`}
                        />
                    </NavLink>
                </div>

                <div className='RowItem__infoBlock'>
                    <div className='RowItem__nameBlock'>
                        <NavLink to={`/product/${id}`}>
                            {name}
                        </NavLink>

                        <AddToFavBtn id={id} />
                    </div>

                    <div className='RowItem__price'>
                        {price} &#x20bd;
                    </div>
                </div>
            </div>

            <div className='RowItem__addBtnBlock'>
                {
                    devices.some(i => i.deviceId === id) ?

                        <QuantityPanel
                            id={String(id)}
                        /> :

                        <button
                            className='RowItem__addBtn'
                            onClick={() => { onAddToCartClick(id) }}
                        >
                            Добавить в корзину
                        </button>
                }
            </div>
        </div>
    )
}
