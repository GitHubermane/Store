//@ts-ignore
import style from './Input.module.scss'

interface propsType extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    text: string
    placeholder?: string
    value: string
    id: string
}

export const Input = (props: propsType) => {

    return (
        <div className={style.Input}>
            <input
                className={style.Input__input}
                type="text"
                id={props.id}
                name={props.id}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder || `Enter ${(props.text).toLowerCase()}`}
            />
            <label
                className={style.Input__label}
                htmlFor={props.id}
            >
                {props.text}
            </label>
        </div>

    )

}