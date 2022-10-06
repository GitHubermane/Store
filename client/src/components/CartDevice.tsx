import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import { SERVER_URL } from "../env"
import { useTypedDispatch } from "../hooks/TypedReduxHooks"
import { ICartDeviceData } from "../models/ICartDeviceData"
import { changeQuantity, deleteCartDevice, getCart } from "../Redux/ActionCreator/Cart.AC"
import '../styles/CartDevice.scss'

export const CartDevice = (props: { device: ICartDeviceData }) => {
    const dispatch = useTypedDispatch()

    // const [localQuantity, setLocalQuantity] = useState(props.device.quantity)
    // const debounced = useDebounce(String(localQuantity))

    // function debounce(func: () => void, timeout = 300) {
    //     let timer: any;
    //     return (...args: any) => {
    //         clearTimeout(timer)
    //         timer = setTimeout(() => { func.apply(this, args); }, timeout);
    //     };
    // }

    const onChangeQuantity = async (id: number, quantity: number) => {
            await dispatch(changeQuantity({ id, quantity }))
            dispatch(getCart())

        return null
    }

    const onDeleteCartDevice = async (id: number) => {
        await dispatch(deleteCartDevice(id))
        dispatch(getCart())
    }

    return (
        <div className='CartDevice'>
            <div className='CartDevice__block'>
                <NavLink to={`/product/${props.device.deviceId}`}>
                    <img
                        className='CartDevice__img'
                        src={`${SERVER_URL}/${props.device.img}`}
                    />
                </NavLink>
                <div className='CartDevice__name'>
                    {props.device.name}
                </div>
                <div className='CartDevice__price'>
                    {props.device.price * props.device.quantity} &#x20bd;
                </div>

                <input
                    className='CartDevice__quantityInput'
                    type='number'
                    min='1'
                    value={props.device.quantity}
                    onChange={(e) => { onChangeQuantity(props.device.deviceId, Number(e.currentTarget.value)) }}
                />

                <button
                    className='CartDevice__delBtn'
                    onClick={() => { onDeleteCartDevice(props.device.deviceId) }}
                >
                    <span className="material-symbols-outlined">
                        delete
                    </span>
                </button>
            </div>
        </div>

    )
}