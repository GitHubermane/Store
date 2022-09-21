import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useTypedDispatch, useTypedSelector } from "../hooks/TypedReduxHooks"
import { usePrevious } from "../hooks/usePrevious"
import { fetchProduct } from "../Redux/ActionCreator/Product.AC"
import { ProductReducer } from "../Redux/Slice/Product.slice"

export const ProductPage = (props: any) => {
    const { product, isLoading, error } = useTypedSelector(state => state.Product)
    const dispatch = useTypedDispatch()
    const { id } = useParams()
    
    useEffect(() => { 
            dispatch(fetchProduct(Number(id)))
    }, [])
    
    return (
        <>
            <div>
                <div>{product.name}</div>
                <div>{product.id}</div>
                <div>{product.price}</div>
            </div>
        </>
    )

}