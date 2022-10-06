import { useEffect, useState } from "react"
import { useTypedDispatch, useTypedSelector } from "../hooks/TypedReduxHooks";
import { useDebounce } from "../hooks/useDebounce";
import { fetchSerchedProducts } from "../Redux/ActionCreator/Products.AC";
import { DropDown } from "./DropDown";
import '../styles/Header.scss';
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, PRODUCTS_ROUTE, CART_ROUTE, FAVORITE_ROUTE } from "../routes";
import { logout } from "../Redux/ActionCreator/Auth.AC";

export const Header = () => {
    const [search, setSearch] = useState('')
    const [active, setActive] = useState(false)

    const { isAuth, userData } = useTypedSelector(state => state.Auth)
    const dispatch = useTypedDispatch()
    const debounced = useDebounce(search)

    const onFocusHandler = () => {
        if (search) setActive(true)
    }

    const onClickHandler = () => {
        dispatch(logout())
    }

    useEffect(() => {
        if (search) {
            dispatch(fetchSerchedProducts(debounced))
            setActive(true)
        } else {
            setActive(false)
        }
    }, [debounced])

    return (
        <div className='Header'>
            <div className='Header__wrapper'>
                <div className='Header__logo'>
                    <NavLink to={PRODUCTS_ROUTE}>
                        Kek
                    </NavLink>
                </div>
                <div className='Header__inputContainer'>
                    <input
                        className='Header__input'
                        placeholder='Search'
                        value={search}
                        onChange={e => { setSearch(e.currentTarget.value) }}
                        onFocus={onFocusHandler}
                    />
                </div>

                {
                    active &&
                    <DropDown
                        setActive={setActive}
                        active={active}
                    />
                }
                {
                    !isAuth ?
                        <div className='Header__btnBlock'>
                            <NavLink
                                className='Header__btn'
                                to={LOGIN_ROUTE}
                            >
                                Login
                            </NavLink>
                            <NavLink
                                className='Header__btn'
                                to={REGISTRATION_ROUTE}
                            >
                                Registration
                            </NavLink>
                        </div> :

                        <div className='Header__btnBlock'>

                            <NavLink to={FAVORITE_ROUTE}>
                                <span className="material-symbols-outlined Header__favBtn">
                                    favorite
                                </span>
                            </NavLink>
                            
                            <NavLink to={CART_ROUTE}>
                                <span className="material-symbols-outlined Header__cartBtn">
                                    shopping_cart
                                </span>
                            </NavLink>

                            {userData.email}

                            <button
                                className='Header__logoutBtn'
                                onClick={onClickHandler}
                            >
                                Logout
                            </button>
                        </div>
                }
            </div>
        </div>
    )
}
