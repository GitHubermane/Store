import { Request, Response } from 'express'

export const BrandController = {
    registration(req: Request, res: Response) {
        try {
            const message = { chonk: 'chp' }
            return res.json(message)
        } catch (e: any) {
            if (res) res.status(500).json(e.message)
        }
    },
    login() {

    },
    auth() {

    }
}

