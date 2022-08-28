import { NextFunction, Request, Response } from 'express'
import { ApiError } from '../error/ApiError'
import { Models } from '../models/models'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export type roleType = 'USER' | 'ADMIN'
const generateJWT = (id: string, email: string, role: roleType) => {
    return jwt.sign(
        { id, email, role },
        String(process.env.SECRET_KEY),
        { expiresIn: '24h' }

    )
}

export const UserController = {
    async registration(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password, role } = req.body
            if (!email || !password) next(ApiError.badRequest('Некорректный логин или пароль'))
            const candidate = await Models.User.findOne({ where: { email } })
            if (candidate) next(ApiError.badRequest('Пользователь с таким email уже существует'))
            const hashPassword = await bcrypt.hash(password, 4)
            const user: any = await Models.User.create({ email, role, password: hashPassword })
            const basket = await Models.Basket.create({ userId: user.id })
            const token = generateJWT(user.id, user.email, user.role)
            return res.json({ token })
        } catch (error) {

        }
    },
    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body
            const user: any = await Models.User.findOne({ where: { email } })
            if (!user) res.json({ message: 'Пользователь не найден' })
            let comparePassword = bcrypt.compareSync(password, user.password)
            if (!comparePassword) res.json({ message: 'Пароль не верный' })
            const token = generateJWT(user.id, user.email, user.role)
            return res.json({ token })
        } catch (error:any) {
            next(ApiError.internal(error.message))
        }
    },
    async auth(req: any, res: Response, next: NextFunction) {
        const token = generateJWT(req.user.id, req.user.email, req.user.role)
        return res.json({ token })
    }
}

