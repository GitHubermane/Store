import { useTypedSelector } from '../hooks/TypedReduxHooks';
import { LoginForm } from '../components/LoginForm';
import { Navigate } from 'react-router-dom';
import { PRODUCTS_ROUTE } from '../routes';


export const LoginPage = () => {
    const { isAuth } = useTypedSelector(state => state.Auth)

    // if (isAuth) (<Navigate to={PRODUCTS_ROUTE} />)
    // else (<LoginForm/>)

    return (
        <>
            {
                isAuth ?
                    <Navigate to={PRODUCTS_ROUTE}/> :
                    <LoginForm/>

            }
        </>
    )
}