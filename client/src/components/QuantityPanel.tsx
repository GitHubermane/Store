import { useEffect, useState } from 'react'
import { useTypedDispatch, useTypedSelector } from '../hooks/TypedReduxHooks'
import { useDebounce } from '../hooks/useDebounce'
import { ICartDeviceData } from '../models/ICartDeviceData'
import { changeQuantity, getCart } from '../Redux/ActionCreator/Cart.AC'
import '../styles/QuantityPanel.scss'

interface propsType extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    id: string
}

export const QuantityPanel = (props: propsType) => {
    const id = Number(props.id)
    const dispatch = useTypedDispatch()
    const { devices } = useTypedSelector(state => state.Cart)
    
    //  Функиця для нахождения CartDevice, если он есть
    const findingCartDevice = (array: Array<ICartDeviceData>) => {
        for (const device of array) {
            if (device.deviceId === id) {
                return device.quantity
            }
        }
    }
    let [quantity, setQuantity] = useState(findingCartDevice(devices))
    const debounced = useDebounce(String(quantity))

    useEffect(() => {
        if (quantity) changeQntNGetCart(id, quantity)
    }, [debounced])

    const changeQntNGetCart = async (id: number, quantity: number) => {
        await dispatch(changeQuantity({ id, quantity }))
        dispatch(getCart())
    }
    const onChangeQuantity = async (quantity: number) => {
        setQuantity(quantity)
    }
    const onDecreaseQuantityClick = () => {
        if (quantity) setQuantity(--quantity)
    }
    const onIncreaseQuantityClick = () => {
        if (quantity) setQuantity(++quantity)
    }

    return (
        <div className='QuantityPanel'>
            <button
                className='QuantityPanel__decrBtn'
                onClick={() => onDecreaseQuantityClick()}
            >
                −
            </button>
            <input
                className='QuantityPanel__input'
                type='number'
                value={quantity}
                onChange={(e) => { onChangeQuantity(Number(e.currentTarget.value)) }}
            />
            <button
                className='QuantityPanel__incrBtn'
                onClick={() => onIncreaseQuantityClick()}
            >
                +
            </button>
        </div>
    )
}