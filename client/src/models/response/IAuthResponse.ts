import { IUser } from "../IUserData"

export interface IAuthResponse {
    accessToken: string
    refreshToken: string
    user: IUser
}