import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Loader } from "../components/Loader"
import { CardItems } from "../components/ProductItem"
import { useTypedDispatch, useTypedSelector } from "../hooks/TypedReduxHooks"
import { getUser } from "../Redux/ActionCreator/User.AC"
import '../styles/pages/UserPage.scss'

export const UserPage = () => {

    const { isLoading } = useTypedSelector(state => state.User)
    const { name, email, img, createdAt, devices } = useTypedSelector(state => state.User.userData)
    const dispatch = useTypedDispatch()

    const { id } = useParams()
    const date = new Date(createdAt)

    useEffect(() => {
        dispatch(getUser(Number(id)))
    }, [])

    return (
        <>
            {
                isLoading ?
                    <Loader /> :
                    <div className="UserPage">
                        <div className="UserPage__topBlock">
                            <div className="UserPage__avatarBlock">
                                <img
                                    className="UserPage__avatar"
                                    src={
                                        img ?
                                            `${process.env.REACT_APP_SERVER_URL}/${img}` :
                                            'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'
                                    }
                                />
                            </div>
                            <div className="UserPage__infoBlock">
                                <div className="UserPage__name">
                                    {name || email}
                                </div>
                                <div className="UserPage__registrated">
                                    Зарегистрирован с {date.toLocaleDateString()}
                                </div>
                            </div>
                        </div>
                        <div className="UserPage__devicesBlock">

                            <div className="UserPage__devicesTitle">
                                Товары добавленные пользователем
                            </div>
                            <div className="UserPage__devices">
                                {
                                    devices?.map(device => (
                                        <CardItems
                                            product={device}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}