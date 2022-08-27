import { Request, Response } from 'express'
import { Models } from '../models/models'

export const TypeController = {
    async create(req: Request, res: Response) {
        try {
            const { name } = req.body
            const type = await Models.Type.create({ name })
            return res.json(type)
        } catch (error) {
            return res.json(error)
        }

    },

    async getAll(req: Request, res: Response) {
        const types = await Models.Type.findAll()
        return res.json(types)
    }
}

