import { Form, Formik } from "formik"
import { useTypedDispatch, useTypedSelector } from "../../hooks/TypedReduxHooks"
import { login } from "../../Redux/ActionCreator/Auth.AC"
import '../../styles/LoginForm.scss'
import * as Yup from 'yup'
import { TextField } from "../TextField"

export const LoginForm = () => {

    const { error } = useTypedSelector(state => state.Auth)
    const dispatch = useTypedDispatch()

    type initialValuesType = typeof initialValues
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Inalid email')
            .required('Required'),
        password: Yup.string()
            .min(8, 'Too short')
            .required('Required'),
    })

    const handleOnSubmit = (values: initialValuesType) => {
        dispatch(login(values))
    }



    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={values => handleOnSubmit(values)}
                validationSchema={validationSchema}
            >
                {props => (
                    <>
                        <Form
                            className="Login__form"
                            onSubmit={props.handleSubmit}
                        >
                            <div className="Login__title">
                                Login
                            </div>
                            <TextField
                                name='email'
                                text='Email'
                            />
                            <TextField
                                name='password'
                                text='Password'
                                type='password'
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
                        </Form>
                    </>
                )}
            </Formik>
        </>
    )
}