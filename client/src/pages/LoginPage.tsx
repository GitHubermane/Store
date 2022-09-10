import { useFormik } from 'formik'
import { Input } from '../components/Input/Input';
import '../styles/LoginPage.scss'
import { useTypedDispatch, useTypedSelector } from '../hooks/TypedReduxHooks';
import { login } from '../Redux/ActionCreator/Auth.AC';


export const LoginPage = () => {
    const { userData, isLoading, error } = useTypedSelector(state => state.Auth)
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
        <>
            {
                isLoading ?

                    <div>Loading</div> :

                    <div>
                        <form
                            className="Login__form"
                            onSubmit={formik.handleSubmit}
                        >
                            <div className="Login__title">
                                Login
                            </div>
                            <Input
                                id='email'
                                text='Email'
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            <Input
                                id='password'
                                text='Password'
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            {
                                error ?
                                    <div>{error}</div> :
                                    null
                            }
                            <button type='submit'>
                                Click(kill) me please
                            </button>
                        </form>
                    </div>
            }
        </>
    )
}