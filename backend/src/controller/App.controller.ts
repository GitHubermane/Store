import { Request, Response } from 'express'

export const AppController = {
    getAll(req: Request, res: Response) {
        try {
            const message = {chonk: 'chp'}
            return res.json(message)
        } catch (e: any) {
            if (res) res.status(500).json(e.message)
        }
    }
}

