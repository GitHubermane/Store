import { CartPage } from "./pages/CartPage"
import { FavoritePage } from "./pages/FavoritePage"
import { LoginPage } from "./pages/LoginPage"
import { ProductPage } from "./pages/ProductPage"
import { ProductsPage } from "./pages/ProductsPage"
import { RegistrationPage } from "./pages/RegistrationPage"

export const REGISTRATION_ROUTE = '/registration'
export const LOGIN_ROUTE = '/login'
export const PRODUCTS_ROUTE = '/'
export const PRODUCT_ROUTE = '/product'
export const CART_ROUTE = '/cart'
export const FAVORITE_ROUTE = '/favorite'
export const ADMIN_ROUTE = '/admin'



export const authRoutes = [
    // {
    //     path: ADMIN_ROUTE,
    //     Component: Admin
    // },

    // {
    //     path: CART_ROUTE,
    //     Component: Cart
    // },

    // {
    //     path: FAVORITE_ROUTE,
    //     Component: FavoritePage
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

    {
        path: CART_ROUTE,
        Component: CartPage
    },

    {
        path: FAVORITE_ROUTE,
        Component: FavoritePage
    }
]
