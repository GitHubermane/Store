import { Request, Response } from 'express'

export const UserController = {
    registration (req: Request, res: Response) {
        
    },
    login () {

    },
    auth(req: Request, res: Response) {
        try {
            const message = {chonk: 'chp'}
            return res.json(message)
        } catch (e: any) {
            if (res) res.status(500).json(e.message)
        }
    }
}

