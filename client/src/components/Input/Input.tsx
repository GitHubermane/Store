import { useState } from 'react';
//@ts-ignore
import style from './Input.module.scss'

interface propsType extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    text: string
    placeholder?: string
    value: string
    name: string
    error?: string
    type: string
}

export const Input = (props: propsType) => {

    const [isVisible, setVisible] = useState(false)
    const onClickHandler = () => {
        setVisible(!isVisible)
    }

    return (
        <div className={style.Input}>
            <input
                className={`${style.Input__input} ${props.error && style.Input__inputError}`}
                type={isVisible ? 'text' : props.type}
                id={props.name}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder || `Enter ${(props.text).toLowerCase()}`}
            />
            <label
                className={`${style.Input__label} ${props.error && style.Input__labelError}`}
                htmlFor={props.name}
            >
                {props.text}
            </label>

            {
                props.type === 'password' &&
                <button
                    className={style.Input__visibleBtn}
                    onClick={onClickHandler}
                    type='button'
                >
                    {isVisible ?
                        <span className="material-symbols-outlined">
                            visibility_off
                        </span> :
                        <span className="material-symbols-outlined">
                            visibility
                        </span>
                    }
                </button>
            }
        </div>

    )

}