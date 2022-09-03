import jwt from "jsonwebtoken"
import { Models } from "../models/models"

class TokenService {
    generateToken(payload: any) {
        const accessToken = jwt.sign(payload, String(process.env.JWT_ACCESS_KEY), { expiresIn: '30m' })
        const refreshToken = jwt.sign(payload, String(process.env.JWT_REFRESH_KEY), { expiresIn: '30d' })
        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId: any, refreshToken: any) {
        const tokenData = await Models.Token.findOne({ where: { userId } }) as any
        if (tokenData) {
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }
        const token = await Models.Token.create({ userId, refreshToken })
        return token
    }

    async verifyAccessOrRefreshToken(token: string, key: string) {
        try {
            const userData = jwt.verify(token, key)
            return userData
        } catch (error) {
            return null
        }
    }

    async verifyAccessToken(token: string) {
        return this.verifyAccessOrRefreshToken(token, String(process.env.JWT_ACCESS_KEY))
    }

    async verifyRefreshToken(token: string) {
        return this.verifyAccessOrRefreshToken(token, String(process.env.JWT_REFRESH_KEY))
    }

    async findToken(refreshToken: string) {
        const token = await Models.Token.findOne({
            where: { refreshToken }
        })
        return token
    }

    async removeToken(refreshToken: string) {
        const token = await Models.Token.destroy({
            where: { refreshToken }
        })
        return token
    }
}

export default new TokenService()