import bcrypt from 'bcrypt'
import { roleType } from "./User.controller"
import { Models } from "../models/models"
import { ApiError } from "../error/ApiError"
import TokenService from "../service/Token.service"
import { UserDto } from "./User.dto"
import { v4 } from "uuid"
import MailService from "../service/Mail.service"

type UserWithRoleType = {
    id?: number
    email: string
    password: string
    role: roleType
}
type UserType = {
    email: string
    password: string
}

//  Функция создания генерации и сохранения токена
const generateJWT = async (user: any) => {
    const userDto = new UserDto(user)
    const tokens = TokenService.generateToken({ ...userDto })
    await TokenService.saveToken(userDto.id, tokens.refreshToken)

    return { tokens, user: userDto }
}

class UserService {
    async registration(email: string, password: string) {
        if (!email || !password) throw ApiError.badRequest('Некорректный логин или пароль')

        const candidate = await Models.User.findOne({ where: { email } })
        if (candidate) throw ApiError.badRequest('Пользователь с таким email уже существует')

        const hashPassword = await bcrypt.hash(password, 4)

        const activationLink = v4()

        const createdUser: any = await Models.User.create({ email, password: hashPassword, activationLink, role:'USER' })
        await Models.Basket.create({ userId: createdUser.id })

        await MailService.sendActiveMail(email, `http://localhost:${process.env.PORT}/api/user/activate/${activationLink}`)

        return generateJWT(createdUser)

    }

    async activate(activationLink: string) {
        const user = await Models.User.findOne({ where: { activationLink } }) as any
        if (!user) throw ApiError.badRequest('Некорректная ссылка')
        user.isActivated = true
        await user.save()

        return user
    }

    async login(email: string, password: string) {
        const findedUser: any = await Models.User.findOne({ where: { email } })
        if (!findedUser) throw ApiError.badRequest('Пользователь не найден')

        let comparePassword = bcrypt.compareSync(password, findedUser.password)
        if (!comparePassword) throw ApiError.badRequest('Пароль неверный')

        return generateJWT(findedUser)
    }

    async logout(refreshToken: string) {
        const token = TokenService.removeToken(refreshToken)
        return token
    }

    async refresh(refreshToken: string) {
        if (!refreshToken) throw ApiError.unauthorized()

        const userData = await TokenService.verifyRefreshToken(refreshToken) as any
        const tokenFromDb = await TokenService.findToken(refreshToken)

        if (!userData || !tokenFromDb) throw ApiError.unauthorized()

        const user = await Models.User.findByPk(userData.id)

        return generateJWT(user)
    }

    async getAll() {
        const users = await Models.User.findAll()
        return users
    }

    async deleteAll() {
        const users = await Models.User.destroy({
            cascade: true,
            truncate: true,
            force: true
        })
        return users

    }
}


export default new UserService()