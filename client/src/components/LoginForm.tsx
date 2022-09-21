import { useFormik } from "formik"
import { useTypedDispatch, useTypedSelector } from "../hooks/TypedReduxHooks"
import { login } from "../Redux/ActionCreator/Auth.AC"
import '../styles/LoginForm.scss'
import { Input } from "./Input/Input"

export const LoginForm = () => {

    const { error } = useTypedSelector(state => state.Auth)
    const dispatch = useTypedDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            dispatch(login(values))
        },
    })

    return (
        <form
            className="Login__form"
            onSubmit={formik.handleSubmit}
        >
            <div className="Login__title">
                Login
            </div>
            <Input
                name='email'
                text='Email'
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <Input
                name='password'
                text='Password'
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            {
                error ?
                    <div>{error}</div> :
                    null
            }
            <button
                className="Login__btn"
                type='submit'
            >
                Login
            </button>
        </form>
    )
}