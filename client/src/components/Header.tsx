import { useEffect, useState } from "react"
import { useTypedDispatch } from "../hooks/TypedReduxHooks";
import { useDebounce } from "../hooks/useDebounce";
import { fetchSerchedProducts } from "../Redux/ActionCreator/Products.AC";
import { DropDown } from "./DropDown";
import '../styles/Header.scss';

export const Header = () => {
    const [search, setSearch] = useState('')
    const [active, setActive] = useState(false)

    const dispatch = useTypedDispatch()

    const debounced = useDebounce(search)

    const onFocusHandler = () => {
        if (search) setActive(true)
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
                </div>
                <div className='Header__inputContainer'>
                    <input
                        className='Header__input'
                        placeholder='Search'
                        value={search}
                        onChange={e => { setSearch(e.currentTarget.value) }}
                        // onBlur={() => { setActive(false) }}
                        onFocus={onFocusHandler}
                    />
                </div>
                {active && <DropDown />}
            </div>
        </div>
    )
}
