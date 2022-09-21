import { ErrorMessage, useField } from "formik"
import { Input } from "./Input/Input"
//@ts-ignore
import style from "./Input/Input.module.scss"

export const TextField = ({ label, ...props }: any) => {
    const [field, meta] = useField(props)
    return (
        <>
            <Input
                {...field}
                {...props}
                error={meta.touched && meta.error}
            />

            {
                meta.touched && meta.error &&
                <div
                    className={style.ErrorMessage}
                >
                    <ErrorMessage
                        name={field.name}
                    />
                </div>
            }
        </>
    )
}