import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import { useTypedDispatch, useTypedSelector } from "../hooks/TypedReduxHooks"
import { fetchProducts } from "../Redux/ActionCreator/Products.AC"
import "../styles/ProductsPage.scss"

export const ProductsPage = () => {
    const { products, isLoading, error } = useTypedSelector(state => state.Products)
    const dispatch = useTypedDispatch()
    const getProducts = async () => {
        const res = await dispatch(fetchProducts())

    }
    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className='Products__wrapper'>
            {
                products.map((product) => (
                    <div
                        key={product.id}
                        className='Card__wrapper'
                    >
                        <div className='Card__imgBlock'>
                            <NavLink to={`/product/${product.id}`}>
                                <img
                                    className='Card__img'
                                    src={`http://localhost:5000/${product.img}`}
                                />
                            </NavLink>

                        </div>
                        <div className='Card__infoBlock'>
                            <NavLink to={`/product/${product.id}`}>
                                <div className='Card__name'>
                                    {product.name}
                                </div>
                            </NavLink>
                            <div className='Card__price'>
                                {product.price} &#x20bd;
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}