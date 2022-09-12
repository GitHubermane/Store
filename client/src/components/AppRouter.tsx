import { LoginPage } from "../pages/LoginPage"
import { Header } from "./Header"
import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from "../routes"

export const AppRouter = () => {

    return (
        <Routes>
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
    )
}