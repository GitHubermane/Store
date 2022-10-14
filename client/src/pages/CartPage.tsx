import { useEffect } from "react"
import { CartDevice } from "../components/CartDevice"
import { useTypedDispatch, useTypedSelector } from "../hooks/TypedReduxHooks"
import { getCart } from "../Redux/ActionCreator/Cart.AC"
import '../styles/pages/CartPage.scss'
export const CartPage = () => {

    const dispatch = useTypedDispatch()
    const { devices, total } = useTypedSelector(state => state.Cart)

    useEffect(() => {
        dispatch(getCart())
    }, [])

    return (
        <div className='CartPage'>

            {
                devices.length !== 0 ?
                    <>
                        <div className='CartPage__list'>
                            {
                                devices.map(device => (
                                    <CartDevice
                                        key={device.id}
                                        device={device}
                                    />
                                ))
                            }
                        </div>
                        <div className='CartPage__total'>
                            <div className='CartPage__totalText'>
                                Итого: <span className='bold'>{total} &#x20bd;</span>
                            </div>
                            <button>
                                Перейти к оплате
                            </button>
                        </div>
                    </> :

                    <div className='CartPage__emptyCart'>
                        Корзина пуста
                    </div>
            }

        </div>
    )
}