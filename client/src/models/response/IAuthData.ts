export interface IAuth {
    email: string
    id: string
    name?: string
    img?: string 
    role: 'USER' | 'ADMIN'
    isActivated: boolean
}

export interface ITokens {
    accessToken: string
    refreshToken: string
}

export interface IAuthData {
    user: IAuth
    tokens: ITokens
}

export interface IAuthResponse {
    userData: IAuthData
}