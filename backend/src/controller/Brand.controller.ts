import { NextFunction, Request, Response } from 'express'
import { ApiError } from '../error/ApiError'
import { Models } from '../models/models'

export const BrandController = {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { name } = req.body
            const brand = await Models.Brand.create({ name })
            return res.json(brand)
        } catch (error) {
            next(ApiError.badRequest('Введите название'))
        }
    },

    async getAll(req: Request, res: Response) {
        const brands = await Models.Brand.findAll()
        return res.json(brands)
    }
}

