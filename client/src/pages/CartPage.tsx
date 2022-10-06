import { useEffect, useState } from "react"
import { CartDevice } from "../components/CartDevice"
import { useTypedDispatch, useTypedSelector } from "../hooks/TypedReduxHooks"
import { getCart } from "../Redux/ActionCreator/Cart.AC"
import '../styles/pages/CartPage.scss'
export const CartPage = () => {

    const dispatch = useTypedDispatch()
    const { devices } = useTypedSelector(state => state.Cart)

    useEffect(() => {
        dispatch(getCart())
    }, [])

    return (
        <div className='CartPage'>
            <div className='CartPage__wrapper'>

                {
                    devices.map(device => (
                        <CartDevice
                            key={device.id}
                            device={device}
                        />
                    ))
                }

                <div className='CartPage__wrapper'>
                    
                </div>
            </div>
        </div>
    )
}