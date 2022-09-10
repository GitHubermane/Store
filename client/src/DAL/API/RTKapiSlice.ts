import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { setCredentials, logout } from '../../Redux/Slice/Auth.slice'

const baseUrl = 'http://localhost:3000'
const baseQuery = fetchBaseQuery({
    baseUrl,
    credentials: 'include',
    prepareHeaders: (headers, { getState }: any) => {
        const token = getState().Auth.token
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers
    },
})

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.status === 401) {
        console.log('sending refresh token')

        const refreshResult = await baseQuery('/refresh', api, extraOptions)

        if (refreshResult?.data) {
            const user = api.getState().auth.user
            // api.dispatch(setCredentials({ ...refreshResult.data, user }))
            
            result = await baseQuery(args, api, extraOptions)
        } else {
            // api.dispatch(logout())
        }
    }
    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
}) 