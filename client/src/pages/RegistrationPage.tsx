import { Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { TextField } from '../components/TextField'
import { useTypedDispatch } from '../hooks/TypedReduxHooks'
import { registration } from '../Redux/ActionCreator/Auth.AC'

export const RegistrationPage = () => {

    type initialValuesType = typeof initialValues
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
    }
    
    const navigate = useNavigate()
    
    const dispatch = useTypedDispatch()
    const handleOnSubmit = (values: initialValuesType) => {
        dispatch(registration(values))
        navigate('/login')
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Inalid email')
            .required('Required'),
        password: Yup.string()
            .min(8, 'Too short')
            .required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Required'),
    })


    return (
        <>
            <div>
                <div className="Login__title">
                    Registration
                </div>
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
                                <TextField
                                    name='email'
                                    text='Email'
                                />
                                <TextField
                                    name='password'
                                    text='Password'
                                    type='password'
                                />
                                <TextField
                                    name='confirmPassword'
                                    text='Confirm password'
                                    type='password'
                                />
    
                                <button type='submit'>
                                    Submit
                                </button>
                            </Form>
                        </>
                    )}
                </Formik>
            </div>

        </>
    )
}
