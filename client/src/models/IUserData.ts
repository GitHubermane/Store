export interface IUser {
    email: string
    id: string
    role: 'USER' | 'ADMIN'
    isActivated: boolean
}

export interface ITokens {
    accessToken: string
    refreshToken: string
}

export interface IUserData {
    user: IUser
    tokens: ITokens
}