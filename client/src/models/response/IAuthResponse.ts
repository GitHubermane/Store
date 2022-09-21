import { IUser } from "../IUserData"

export interface IAuthResponse {
    userData: {
        tokens: {
            accessToken: string
            refreshToken: string
        }
        user: IUser
    }
}