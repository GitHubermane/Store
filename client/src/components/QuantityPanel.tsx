import { useEffect, useState } from 'react'
import { useTypedDispatch, useTypedSelector } from '../hooks/TypedReduxHooks'
import { useDebounce } from '../hooks/useDebounce'
import { ICartDeviceData } from '../models/ICartDeviceData'
import { changeQuantity, getCart } from '../Redux/ActionCreator/Cart.AC'
import { setQuantity } from '../Redux/Slice/Cart.slice'
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
    let findedCartDeviceQuant = findingCartDevice(devices)
    const debounced = useDebounce(String(findedCartDeviceQuant))

    useEffect(() => {
        if (debounced) changeQntNGetCart(id, Number(debounced))
    }, [debounced])

    const changeQntNGetCart = async (id: number, quantity: number) => {
        await dispatch(changeQuantity({ id, quantity }))
        dispatch(getCart())
    }
    
    const onChangeQuantity = async (quantity: number) => {
        dispatch(setQuantity({id, quantity}))
    }
    const onDecreaseQuantityClick = () => {
        if (findedCartDeviceQuant) dispatch(setQuantity({id, quantity:--findedCartDeviceQuant}))
    }
    const onIncreaseQuantityClick = () => {
        if (findedCartDeviceQuant) dispatch(setQuantity({ id, quantity: ++findedCartDeviceQuant }))
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
                value={findedCartDeviceQuant}
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