import { useTypedDispatch, useTypedSelector } from "../hooks/TypedReduxHooks"
import { addToFavourite, deleteFavouriteDevice, getFavourites } from "../Redux/ActionCreator/Favourite.AC"

type propsType = {
    id: number
    className?: string
}

export const AddToFavBtn = (props: propsType) => {
    const { devices } = useTypedSelector(state => state.Favourites)
    const dispatch = useTypedDispatch()

    const addToFav = async (id: number) => {
        await dispatch(addToFavourite(id))
        dispatch(getFavourites())
    }
    const deleteFromFav = async (id: number) => {
        await dispatch(deleteFavouriteDevice(id))
        dispatch(getFavourites())
    }

    return (
        <>
            {
                devices.some(i => i.deviceId === props.id) ?

                    <button
                        className={props.className}
                        onClick={() => deleteFromFav(props.id)}
                    >
                        <span className='material-symbols-outlined fillBtn'>
                            favorite
                        </span>
                    </button> :

                    <button
                        className={props.className}
                        onClick={() => addToFav(props.id)}
                    >
                        <span className='material-symbols-outlined'>
                            favorite
                        </span>
                    </button>
            }
        </>
    )
}