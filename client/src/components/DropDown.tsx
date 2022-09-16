import { NavLink } from "react-router-dom";
import { SERVER_URL } from "../env"
import { useTypedSelector } from "../hooks/TypedReduxHooks"
import '../styles/DropDown.scss';

export const DropDown = () => {
    const { searchedProducts } = useTypedSelector(state => state.Products)


    return (
        <div className="DropDown">
            {
                searchedProducts.length != 0 ?
                    searchedProducts.map((product) => (
                        <NavLink
                            key={product.id}
                            to={`/product/${product.id}`}
                        >
                            <div className="DropDown__container">
                                <div className="DropDown__block">
                                    <img
                                        className="DropDown__img"
                                        src={`${SERVER_URL}/${product.img}`}
                                    />
                                    {product.name}
                                </div>
                                <div className="Header__DDPrice">
                                    {product.price} &#x20bd;
                                </div>
                            </div>
                        </NavLink>
                    )) :
                    <div>
                        Devices not founded
                    </div>
            }
        </div>
    )
}