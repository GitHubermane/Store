import { useEffect } from 'react'
import { useTypedDispatch, useTypedSelector } from '../../hooks/TypedReduxHooks'
import { getBrands } from '../../Redux/ActionCreator/Brand.AC'
import { getTypes } from '../../Redux/ActionCreator/Type.AC'
import { Field, Form, Formik } from 'formik'
import '../../styles/AddDeviceForm.scss'
import * as Yup from 'yup'
import { createProduct } from '../../Redux/ActionCreator/admin/Product.AC'
import { fetchProducts } from '../../Redux/ActionCreator/Products.AC'

export const AddDeviceForm = () => {
    const dispatch = useTypedDispatch()
    const { brands } = useTypedSelector(state => state.Brands)
    const { types } = useTypedSelector(state => state.Types)

    type initialValuesType = typeof initialValues
    const initialValues = {
        name: '',
        price: '',
        brandId: 1,
        typeId: 1,
        img: '',
    }
    const validationSchema = Yup.object().shape({
        // email: Yup.string()
        //     .email('Inalid email')
        //     .required('Required'),
        // password: Yup.string()
        //     .min(8, 'Too short')
        //     .required('Required'),
    })
    const handleOnSubmit = async (values: initialValuesType) => {
        await dispatch(createProduct(values))
        await dispatch(fetchProducts())
    }

    useEffect(() => {
        dispatch(getBrands())
        dispatch(getTypes())

    }, [])

    return (
        <>
            <Formik
                initialValues={initialValues}
                enableReinitialize
                onSubmit={values => handleOnSubmit(values)}
                validationSchema={validationSchema}
            >
                {
                    props => (
                        <>
                            <Form className='AddDeviceForm__form'>
                                <Field
                                    className='AddDeviceForm__select'
                                    name='type'
                                    as='select'
                                >
                                    {
                                        types.map((i) => (
                                            <option
                                                key={i.id}
                                                value={i.id}
                                            >
                                                {i.name}
                                            </option>
                                        ))
                                    }
                                </Field>
                                <Field
                                    className='AddDeviceForm__select'
                                    name='brand'
                                    as='select'
                                >
                                    {
                                        brands.map((i) => (
                                            <option
                                                key={i.id}
                                                value={i.id}
                                            >
                                                {i.name}
                                            </option>
                                        ))
                                    }
                                </Field>
                                <Field
                                    className='AddDeviceForm__input'
                                    placeholder='Введите название'
                                    name='name'
                                />
                                <Field
                                    className='AddDeviceForm__input'
                                    placeholder='Введите цену'
                                    name='price'
                                    type='number'
                                />
                                <input
                                    className='AddDeviceForm__input'
                                    name='img'
                                    onChange={(e: any) => {
                                        props.setFieldValue("img", e.currentTarget.files[0]);
                                        console.log(e.currentTarget.files[0]);

                                    }}
                                    type='file'
                                />
                                <button
                                    className='AddDeviceForm'
                                    type='submit'
                                >
                                    Создать
                                </button>
                            </Form>
                        </>
                    )}
            </Formik>

        </>
    )
}