import { LoginPage } from "./pages/LoginPage"
import { ProductPage } from "./pages/ProductPage"
import { ProductsPage } from "./pages/ProductsPage"
import { RegistrationPage } from "./pages/RegistrationPage"

export const REGISTRATION_ROUTE = '/registration'
export const LOGIN_ROUTE = '/login'
export const PRODUCTS_ROUTE = '/'
export const PRODUCT_ROUTE = '/product'
export const BASKET_ROUTE = '/basket'
export const ADMIN_ROUTE = '/admin'


export const authRoutes = [
    // {
    //     path: ADMIN_ROUTE,
    //     Component: Admin
    // },

    // {
    //     path: BASKET_ROUTE,
    //     Component: Basket
    // }
]
export const publicRoutes = [
    {
        path: REGISTRATION_ROUTE,
        Component: RegistrationPage
    },
    
    {
        path: LOGIN_ROUTE,
        Component: LoginPage
    },

    {
        path: PRODUCTS_ROUTE,
        Component: ProductsPage
    },

    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage
    },

]
