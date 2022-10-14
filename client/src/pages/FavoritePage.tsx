import { useEffect } from "react"
import { FavoriteDevice } from "../components/FavouriteDevice"
import { useTypedDispatch, useTypedSelector } from "../hooks/TypedReduxHooks"
import { getFavourites } from "../Redux/ActionCreator/Favourite.AC"
import '../styles/pages/FavouritePage.scss'
export const FavoritePage = () => {
    const { devices } = useTypedSelector(state => state.Favourites)
    const dispatch = useTypedDispatch()

    useEffect(() => {
        dispatch(getFavourites())
    }, [])

    return (
        <div className='FavouritePage'>
            {
                devices.map(device => (
                    <FavoriteDevice
                        key={device.id}
                        device={device}
                    />
                ))
            }
        </div>
    )
}