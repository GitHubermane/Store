import { Header } from "./Header"
import { Route, Routes } from 'react-router-dom'
import { authRoutes, publicRoutes } from "../routes"
import { useTypedSelector } from "../hooks/TypedReduxHooks"

export const AppRouter = () => {
    const { isAuth } = useTypedSelector(state => state.Auth)
    return (
        <>
            <Header />
            <div className='container'>
                <Routes>
                    {
                        isAuth && authRoutes.map(({ path, Component }) =>
                            <Route
                                key={path}
                                path={path}
                                element={<Component />}
                            />
                        )
                    }
                    {
                        publicRoutes.map(({ path, Component }) => (
                            <Route
                                key={path}
                                path={path}
                                element={<Component />}
                            />
                        ))
                    }
                </Routes>
            </div>
        </>
    )
}