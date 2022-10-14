import { useEffect } from "react"
import { Card } from "../components/Card"
import { useTypedDispatch, useTypedSelector } from "../hooks/TypedReduxHooks"
import { fetchProducts } from "../Redux/ActionCreator/Products.AC"
import "../styles/pages/ProductsPage.scss"

export const ProductsPage = () => {

    const { products, isLoading, error } = useTypedSelector(state => state.Products)
    const dispatch = useTypedDispatch()

    const getProducts = async () => {
        await dispatch(fetchProducts())
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className='Products__wrapper'>
            {
                products.map(product => (
                    <Card
                        key={product.id}
                        product={product}
                    />
                ))
            }
        </div>
    )
}