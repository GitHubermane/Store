import { useFormik } from 'formik'
import { Input } from '../components/Input/Input'

export const RegistrationPage = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordCheck: '',
            name: ''
        },
        onSubmit: values => {
            if (values.password !== values.passwordCheck) {
                
            }
        },
    })

    return (
        <>
            <div>
                <form
                    className="Login__form"
                    onSubmit={formik.handleSubmit}
                >
                    <div className="Login__title">
                        Registration
                    </div>
                    <Input
                        id='email'
                        text='Email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    <Input
                        id='name'
                        text='Name'
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    <Input
                        id='password'
                        text='Password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    <Input
                        id='passwordCheck'
                        text='Password'
                        onChange={formik.handleChange}
                        value={formik.values.passwordCheck}
                    />
                    <button type='submit'>
                        
                    </button>
                </form>
            </div>

        </>
    )
}
