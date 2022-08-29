import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'
import { roleType } from "../controller/User.controller"
import { Models } from "../models/models"
import { ApiError } from "../error/ApiError"

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
const generateJWT = (id: string, email: string, role: roleType) => {
    return jwt.sign(
        { id, email, role },
        String(process.env.SECRET_KEY),
        { expiresIn: '24h' }
    )
}
class UserService {
    async registration(user: UserWithRoleType) {
        if (!user.email || !user.password) throw ApiError.badRequest('Некорректный логин или пароль')
        const candidate = await Models.User.findOne({ where: { email: user.email } })
        if (candidate) throw ApiError.badRequest('Пользователь с таким email уже существует')
        const hashPassword = await bcrypt.hash(user.password, 4)
        const createdUser: any = await Models.User.create({ email: user.email, role: user.role, password: hashPassword })
        const basket = await Models.Basket.create({ userId: user.id })
        const token = generateJWT(String(user?.id), user.email, user.role)
        return token
    }

    async login(user: UserWithRoleType) {
        const findedUser: any = await Models.User.findOne({ where: { email: user.email } })
        if (!findedUser) throw ApiError.badRequest('Пользователь не найден')
        let comparePassword = bcrypt.compareSync(user.password, findedUser.password)
        if (!comparePassword) throw ApiError.badRequest('Пароль неверный')
        const token = generateJWT(String(user?.id), user.email, user.role)
        return token
    }

    async auth(user: UserWithRoleType) {
        const token = generateJWT(String(user?.id), user.email, user.role)
        return token
    }
}


export default new UserService()