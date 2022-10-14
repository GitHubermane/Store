import { useState, useEffect } from "react"
import { ProductItem } from "../components/ProductItem"
import { useTypedDispatch, useTypedSelector } from "../hooks/TypedReduxHooks"
import { fetchProducts } from "../Redux/ActionCreator/Products.AC"
import "../styles/pages/ProductsPage.scss"
//@ts-ignore
import rowsIcon from '../assets/rowsIcon.svg'
//@ts-ignore
import cardsIcon from '../assets/cardsIcon.svg'

export const ProductsPage = () => {
    
    const [view, setView] = useState('Cards' as 'Cards' | 'Rows')
    const { products } = useTypedSelector(state => state.Products)
    const dispatch = useTypedDispatch()

    const onChangeViewClick = () => {
        if (view === 'Rows') setView('Cards')
        else setView('Rows')
    }

    const getProducts = async () => {
        await dispatch(fetchProducts())
    }

    useEffect(() => {
        getProducts()
    }, [])

    const classNameFunc = (className?: string) => {
        if (view === 'Rows') return `Products${className} Rows${className}`
        else return `Products${className}`
    }
    return (
        <div className='Products'>
            <div className='Products__block'>
                <div className='Products__viewBtnBlock'>
                    <button
                        className='Products__viewBtn'
                        onClick={onChangeViewClick}
                    >
                        {
                            view === 'Cards' ?
                                <img src={rowsIcon} /> :
                                <img src={cardsIcon} />
                        }
                    </button>
                </div>
            </div>
            <div className={classNameFunc('__content')}>
                {
                    products.map(product => (
                        <ProductItem
                            key={product.id}
                            product={product}
                            view={view}
                        />
                    ))
                }
            </div>
        </div>
    )
}