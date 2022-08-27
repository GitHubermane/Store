import { Request, Response } from 'express'
import { ApiError } from '../error/ApiError'
import { nextType } from '../middleware/ErrorHandleMiddleware'

export const UserController = {
    async registration (req: Request, res: Response) {
        
    },
    async login () {

    },
    async auth(req: Request, res: Response, next: nextType) {
        const {id} = req.query
        if (!id) {
            return next(ApiError.badRequest('Не задан ID'))
        }
        res.json(id)
    }
}

