import { useTypedSelector } from '../hooks/TypedReduxHooks';
import { LoginForm } from '../components/Forms/LoginForm';
import { Navigate } from 'react-router-dom';
import { PRODUCTS_ROUTE } from '../routes';


export const LoginPage = () => {
    const { isAuth } = useTypedSelector(state => state.Auth)

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