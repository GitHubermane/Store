import { LoginPage } from "./pages/LoginPage"
import { ProductsPage } from "./pages/ProductsPage"
import { RegistrationPage } from "./pages/RegistrationPage"

const REGISTRATION_ROUTE = '/registration'
const LOGIN_ROUTE = '/login'
const PRODUCTS_ROUTE = '/products'
const PRODUCT_ROUTE = '/product'
const BASKET_ROUTE = '/basket'
const ADMIN_ROUTE = '/admin'


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

    // {
    //     path: PRODUCT_ROUTE + '/:id',
    //     Component: Product
    // },

]
