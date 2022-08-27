import { Request, Response } from 'express'
import { Models } from '../models/models'

export const BrandController = {
    async create(req: Request, res: Response) {
        const {name} = req.body
        const brand = await Models.Brand.create({name})
        return res.json(brand)
    },

    async getAll(req: Request, res: Response) {
       const brands = await Models.Brand.findAll()
        return res.json(brands)
    }
}

