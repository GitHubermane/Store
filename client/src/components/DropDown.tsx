import { NavLink } from "react-router-dom";
import { SERVER_URL } from "../env"
import { useTypedDispatch, useTypedSelector } from "../hooks/TypedReduxHooks"
import { addToCart, getCart } from "../Redux/ActionCreator/Cart.AC";
import { fetchProduct } from "../Redux/ActionCreator/Product.AC";
import '../styles/DropDown.scss';

export const DropDown = (props: any) => {
    const { searchedProducts } = useTypedSelector(state => state.Products)
    const dispatch = useTypedDispatch()

    const onClickFetchProduct = (id: number) => {
        props.setActive(false)
        dispatch(fetchProduct(id))
    }

    const onAddToCartClick = (id: number) => {
        dispatch(addToCart(id))
        dispatch(getCart())
    }

    return (
        <div className="DropDown">
            {
                searchedProducts.length != 0 ?
                
                    searchedProducts.map((product) => (
                        <div
                            className="DropDown__container"
                            key={product.id}
                        >
                            <NavLink
                                className="DropDown__navLink"
                                to={`/product/${product.id}`}
                                onClick={() => onClickFetchProduct(product.id)}
                            >
                                <div className="DropDown__block">

                                    <div className="DropDown__nameNImg">
                                        <img
                                            className="DropDown__img"
                                            src={`${SERVER_URL}/${product.img}`}
                                        />
                                        {product.name}
                                    </div>

                                    <div className="DropDown__price">
                                        {product.price} &#x20bd;
                                    </div>
                                </div>
                            </NavLink>
                            <button
                                className='DropDown__addBtn'
                                onClick={() => { onAddToCartClick(Number(product.id)) }}
                            >
                                <span className="material-symbols-outlined">
                                    add_shopping_cart
                                </span>
                            </button>
                        </div>
                    )) :

                    <div>
                        Devices not founded
                    </div>
            }
        </div>
    )
}