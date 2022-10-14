import { NavLink } from "react-router-dom"
import { SERVER_URL } from "../env"
import { useTypedDispatch } from "../hooks/TypedReduxHooks"
import { IFavouriteDevice } from "../models/IFavouriteDevice"
import { deleteFavouriteDevice, getFavourites } from "../Redux/ActionCreator/Favourite.AC"
import '../styles/FavouriteDevice.scss'

type propsType = {
    device: IFavouriteDevice
}

export const FavoriteDevice = (props: propsType) => {
    const dispatch = useTypedDispatch()

    const onDeleteFavDevice = async (id: number) => {
        await dispatch(deleteFavouriteDevice(id))
        dispatch(getFavourites())

    }

    return (
        <div className='FavoriteDevice'>
            <div className='FavoriteDevice__wrapper listWrapper'>
                <NavLink
                    className='FavoriteDevice__navLink'
                    to={`/product/${props.device.deviceId}`}
                >
                    <img
                        className='FavoriteDevice__img'
                        src={`${SERVER_URL}/${props.device.img}`}
                    />
                    <div className='FavoriteDevice__name'>
                        {props.device.name}
                    </div>
                </NavLink>
                <button
                    className='FavoriteDevice__delBtn delBtn'
                    onClick={() => { onDeleteFavDevice(props.device.deviceId) }}
                >
                    <span className="material-symbols-outlined">
                        delete
                    </span>
                </button>
            </div>
        </div >
    )
}