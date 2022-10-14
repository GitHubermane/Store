import { NavLink } from "react-router-dom"
import { SERVER_URL } from "../env"
import { useTypedDispatch } from "../hooks/TypedReduxHooks"
import { ICartDeviceData } from "../models/ICartDeviceData"
import { deleteCartDevice, getCart } from "../Redux/ActionCreator/Cart.AC"
import '../styles/CartDevice.scss'
import { QuantityPanel } from "./QuantityPanel"

export const CartDevice = (props: { device: ICartDeviceData }) => {
    const dispatch = useTypedDispatch()

    const onDeleteCartDevice = async (id: number) => {
        await dispatch(deleteCartDevice(id))
        dispatch(getCart())
    }

    return (
        <div className='CartDevice'>
            <div className='CartDevice__wrapper listWrapper'>
                <div className='CartDevice__infoBlock'>
                    <NavLink
                        className='CartDevice__navLink'
                        to={`/product/${props.device.deviceId}`}
                    >
                        <img
                            className='CartDevice__img'
                            src={`${SERVER_URL}/${props.device.img}`}
                        />
                        <div className='CartDevice__name'>
                            {props.device.name}
                        </div>
                    </NavLink>
                    <div className='CartDevice__price'>
                        {props.device.price * props.device.quantity} &#x20bd;
                    </div>
                </div>

                <QuantityPanel id={String(props.device.deviceId)}/>

                <button
                    className='CartDevice__delBtn delBtn'
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